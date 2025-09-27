// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";

import {IHooks} from "@uniswap/v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "@uniswap/v4-core/src/libraries/Hooks.sol";
import {TickMath} from "@uniswap/v4-core/src/libraries/TickMath.sol";
import {IPoolManager} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/src/types/PoolKey.sol";
import {BalanceDelta} from "@uniswap/v4-core/src/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/src/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/src/types/Currency.sol";
import {StateLibrary} from "@uniswap/v4-core/src/libraries/StateLibrary.sol";
import {LiquidityAmounts} from "@uniswap/v4-core/test/utils/LiquidityAmounts.sol";
import {IPositionManager} from "@uniswap/v4-periphery/src/interfaces/IPositionManager.sol";
import {Constants} from "@uniswap/v4-core/test/utils/Constants.sol";
import {SwapParams} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ebool, e, euint256} from "@inco/lightning/src/Lib.sol";

import {IncoTest} from "@inco/lightning/src/test/IncoTest.sol";
import {GWEI} from "@inco/shared/src/TypeUtils.sol";

import {EasyPosm} from "./utils/libraries/EasyPosm.sol";
import {Deployers} from "./utils/Deployers.sol";
import {ConfidentialERC20Wrapper} from "../ConfidentialERC20Wrapper.sol";
import {Juni} from "../Juni.sol";
import {console2} from "forge-std/console2.sol";
import {ESwapParams} from "../ESwapParams.sol";
import {LPRewardVault} from "../LPRewardVault.sol";

contract JuniTest is IncoTest, Deployers {
    using EasyPosm for IPositionManager;
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;
    using StateLibrary for IPoolManager;
    using e for bool;
    using e for ebool;
    using e for euint256;
    using e for uint256;

    Currency currency0;
    Currency currency1;
    ConfidentialERC20Wrapper confidentialERC20Wrapper0;
    ConfidentialERC20Wrapper confidentialERC20Wrapper1;
    LPRewardVault lpRewardVault;
    PoolKey poolKey;

    Juni hook;
    PoolId poolId;

    uint256 tokenId;
    uint256 tokenId1;
    int24 tickLower;
    int24 tickUpper;

    function setUp() public override {
        super.setUp();
        // Deploys all required artifacts.
        deployArtifacts();

        (
            currency0,
            currency1,
            confidentialERC20Wrapper0,
            confidentialERC20Wrapper1,
            lpRewardVault
        ) = deployCurrencyPair();

        // Deploy the hook to an address with the correct flags
        address flags = address(
            uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.BEFORE_INITIALIZE_FLAG | Hooks.AFTER_SWAP_FLAG) ^ (0x4444 << 144) // Namespace the hook to avoid collisions
        );
        bytes memory constructorArgs = abi.encode(
            poolManager,
            swapRouter,
            confidentialERC20Wrapper0,
            confidentialERC20Wrapper1,
            lpRewardVault
        ); // Add all the necessary constructor arguments from the hook
        deployCodeTo("Juni.sol:Juni", constructorArgs, flags);
        hook = Juni(flags);
        confidentialERC20Wrapper0.setHook(hook);
        confidentialERC20Wrapper1.setHook(hook);

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        poolManager.initialize(poolKey, Constants.SQRT_PRICE_1_1);

        // Provide full-range liquidity to the pool
        tickLower = TickMath.minUsableTick(poolKey.tickSpacing);
        tickUpper = TickMath.maxUsableTick(poolKey.tickSpacing);

        uint128 liquidityAmount = 100e18;

        (uint256 amount0Expected, uint256 amount1Expected) = LiquidityAmounts.getAmountsForLiquidity(
            Constants.SQRT_PRICE_1_1,
            TickMath.getSqrtPriceAtTick(tickLower),
            TickMath.getSqrtPriceAtTick(tickUpper),
            liquidityAmount
        );

        (tokenId, ) = positionManager.mint(
            poolKey,
            tickLower,
            tickUpper,
            liquidityAmount,
            amount0Expected + 1,
            amount1Expected + 1,
            address(this),
            block.timestamp,
            Constants.ZERO_BYTES
        );
        (tokenId1, ) = positionManager.mint(
            poolKey,
            tickLower,
            tickUpper,
            liquidityAmount,
            amount0Expected + 1,
            amount1Expected + 1,
            address(hook),
            block.timestamp,
            Constants.ZERO_BYTES
        );
    }

    function testEmptyStackRunESwaps() public {
        processAllOperations();
        hook.requestDecryptionForEarliestEncryptedBlock();
        hook.runESwaps();
        hook.runESwaps();
        hook.requestDecryptionForEarliestEncryptedBlock();
        processAllOperations();
        processAllOperations();
        processAllOperations();
    }

    function testSameArbFee() public {
        // check that if arb fee for two highest arb fee providing swaps is same,
        // the winner should be the first one
        ebool eZeroForOne1 = (true).asEbool();
        ebool eZeroForOne2 = (true).asEbool();
        ebool eZeroForOne3 = (true).asEbool();
        euint256 arbAuctionFee1 = uint256(0).asEuint256();
        // winner should be swap 2
        euint256 arbAuctionFee2 = uint256(10000).asEuint256();
        euint256 arbAuctionFee3 = uint256(10000).asEuint256();
        euint256 eAmountInTransform1 = uint256(0).asEuint256();
        euint256 eAmountInTransform2 = uint256(0).asEuint256();
        euint256 eAmountInTransform3 = uint256(0).asEuint256();
        eZeroForOne1.allow(address(hook));
        eZeroForOne2.allow(address(hook));
        eZeroForOne3.allow(address(hook));
        arbAuctionFee1.allow(address(hook));
        arbAuctionFee2.allow(address(hook));
        arbAuctionFee3.allow(address(hook));
        eAmountInTransform1.allow(address(hook));
        eAmountInTransform2.allow(address(hook));
        eAmountInTransform3.allow(address(hook));
        IERC20(address(uint160(currency0.toId()))).approve(address(hook), 1e21);
        IERC20(address(uint160(currency1.toId()))).approve(address(hook), 1e21);
        confidentialERC20Wrapper0.wrap(1e17);
        confidentialERC20Wrapper1.wrap(1e17);
        uint256 amountInOne = 1e12;
        uint256 amountInTwo = 1e12;
        uint256 amountInThree = 1e12;
        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne1,
                eArbAuctionFee: arbAuctionFee1,
                eAmountInTransform: eAmountInTransform1,
                amountIn: amountInOne,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: false
        });

        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne2,
                eArbAuctionFee: arbAuctionFee2,
                eAmountInTransform: eAmountInTransform2,
                amountIn: amountInTwo,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: false
        });

        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne3,
                eArbAuctionFee: arbAuctionFee3,
                eAmountInTransform: eAmountInTransform3,
                amountIn: amountInThree,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: true
        });
        vm.roll(block.number + 1);
        hook.requestDecryptionForEarliestEncryptedBlock();

        processAllOperations();
        // hook.runESwaps();
        assertEq(hook.blockArbAuctionWinnerDecryptedTxIndex(block.number - 1), 1);
    }

    function testAmountInTransform() public {
        ebool eZeroForOne1 = (true).asEbool();
        euint256 arbAuctionFee1 = uint256(0).asEuint256();
        euint256 eAmountInTransform1 = uint256(1).asEuint256();
        eZeroForOne1.allow(address(hook));
        arbAuctionFee1.allow(address(hook));
        eAmountInTransform1.allow(address(hook));
        IERC20(address(uint160(currency0.toId()))).approve(address(hook), 1e21);
        IERC20(address(uint160(currency1.toId()))).approve(address(hook), 1e21);
        confidentialERC20Wrapper0.wrap(1e17);
        confidentialERC20Wrapper1.wrap(1e17);
        uint256 amountInOne = 1e2;
        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne1,
                eArbAuctionFee: arbAuctionFee1,
                eAmountInTransform: eAmountInTransform1,
                amountIn: amountInOne,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: false
        });
        vm.roll(block.number + 1);
        hook.requestDecryptionForEarliestEncryptedBlock();
        processAllOperations();
        hook.runESwaps();
        assertEq(
            IERC20(address(uint160(currency0.toId()))).balanceOf(address(confidentialERC20Wrapper0)),
            99999999999990000
        );
    }

    function testJuniHooks() public {
        // bytes memory encryptedZeroForOne = fakePrepareEboolCiphertext(false);
        // bytes memory encryptedZeroForOne2 = fakePrepareEboolCiphertext(false);
        // bytes memory encryptedZeroForOne3 = fakePrepareEboolCiphertext(false);
        // Approve hook also
        ebool eZeroForOne1 = (false).asEbool();
        ebool eZeroForOne2 = (true).asEbool();
        ebool eZeroForOne3 = (false).asEbool();
        euint256 arbAuctionFee1 = uint256(1000).asEuint256();
        euint256 arbAuctionFee2 = uint256(1).asEuint256();
        euint256 arbAuctionFee3 = uint256(10000).asEuint256();
        euint256 eAmountInTransform1 = uint256(4).asEuint256();
        euint256 eAmountInTransform2 = uint256(0).asEuint256();
        euint256 eAmountInTransform3 = uint256(0).asEuint256();
        eZeroForOne1.allow(address(hook));
        eZeroForOne2.allow(address(hook));
        eZeroForOne3.allow(address(hook));
        arbAuctionFee1.allow(address(hook));
        arbAuctionFee2.allow(address(hook));
        arbAuctionFee3.allow(address(hook));
        eAmountInTransform1.allow(address(hook));
        eAmountInTransform2.allow(address(hook));
        eAmountInTransform3.allow(address(hook));
        IERC20(address(uint160(currency0.toId()))).approve(address(hook), 1e21);
        IERC20(address(uint160(currency1.toId()))).approve(address(hook), 1e21);
        confidentialERC20Wrapper0.wrap(1e17);
        confidentialERC20Wrapper1.wrap(1e17);
        // Approve hook also
        uint256 amountInOne = 1e19;
        uint256 amountInTwo = 1e15;
        uint256 amountInThree = 1e15;
        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne1,
                eArbAuctionFee: arbAuctionFee1,
                eAmountInTransform: eAmountInTransform1,
                amountIn: amountInOne,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: false
        });

        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne2,
                eArbAuctionFee: arbAuctionFee2,
                eAmountInTransform: eAmountInTransform2,
                amountIn: amountInTwo,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: false
        });

        hook.addESwap({
            params: ESwapParams({
                creator: address(this),
                receiver: address(this),
                eZeroForOne: eZeroForOne3,
                eArbAuctionFee: arbAuctionFee3,
                eAmountInTransform: eAmountInTransform3,
                amountIn: amountInThree,
                sqrtPriceLimitX96: 0,
                deadline: block.timestamp + 1
            }),
            processPrev: true
        });
        vm.roll(block.number + 1);
        hook.requestDecryptionForEarliestEncryptedBlock();
        processAllOperations();
        assertEq(hook.blockArbAuctionWinnerDecryptedTxIndex(block.number - 1), 2);
        hook.runESwaps();
        (uint256 balance0, uint256 balance1) = lpRewardVault.getBalances();
        assertEq(balance0, 0);
        assertEq(balance1, 10000);
    }
}
