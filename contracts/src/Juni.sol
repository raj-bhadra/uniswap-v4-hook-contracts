// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {console2} from "forge-std/console2.sol";
import {BaseHook} from "@openzeppelin/uniswap-hooks/src/base/BaseHook.sol";
import {IPoolManager, SwapParams} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {Hooks} from "@uniswap/v4-core/src/libraries/Hooks.sol";
import {CurrencySettler} from "@openzeppelin/uniswap-hooks/src/utils/CurrencySettler.sol";
import {Currency} from "@uniswap/v4-core/src/types/Currency.sol";
import {PoolKey} from "@uniswap/v4-core/src/types/PoolKey.sol";
import {BeforeSwapDelta, BeforeSwapDeltaLibrary, toBeforeSwapDelta} from "@uniswap/v4-core/src/types/BeforeSwapDelta.sol";
import {IUniswapV4Router04} from "hookmate/interfaces/router/IUniswapV4Router04.sol";
import {BalanceDelta} from "@uniswap/v4-core/src/types/BalanceDelta.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/src/types/PoolId.sol";
import {ebool, e, euint256} from "@inco/lightning/src/Lib.sol";
import {IHook} from "./IHook.sol";
import {Blocks} from "./Blocks.sol";
import {ESwapInputParams, ESwapParams} from "./ESwapParams.sol";
import {ConfidentialERC20Wrapper} from "./ConfidentialERC20Wrapper.sol";
import {LPRewardVault} from "./LPRewardVault.sol";
import {DecryptionParams} from "./DecryptionParams.sol";

contract Juni is BaseHook, Blocks, IHook {
    using PoolIdLibrary for PoolKey;
    using CurrencySettler for Currency;
    using e for euint256;
    using e for ebool;
    using e for bool;
    using e for bytes;
    using e for address;
    using e for uint256;

    IUniswapV4Router04 public swapRouter;
    bool public initialized;
    PoolKey public poolKey;
    bool public locked = true;
    mapping(uint256 => bool) public blockDecryptionRequested;
    // Indicates whether a block number has one or more decrypted swaps present
    mapping(uint256 => bool) public blockSwapsDecrypted;
    // Indicates whether a block number has all it's encrypted swaps processed
    mapping(uint256 => bool) public blockSwapsProcessed;
    mapping(uint256 => ESwapParams[]) public queuedSwapsForBlock;
    mapping(uint256 => euint256) public blockEncryptedState;
    mapping(uint256 => euint256) public blockAmountInTransformEncrypted;
    mapping(uint256 => uint256) public blockAmountInTransformDecrypted;
    mapping(uint256 => euint256) public blockArbAuctionWinnerEncryptedTxIndex;
    mapping(uint256 => euint256) public blockArbAuctionWinnerEncryptedTxAmount;
    mapping(uint256 => uint256) public blockArbAuctionWinnerDecryptedTxIndex;
    mapping(uint256 => uint256) public blockArbAuctionWinnerDecryptedTxAmount;
    mapping(uint256 => uint256) public blockDecryptedState;

    uint256 public constant MAX_QUEUE_PER_BLOCK = 16;
    uint256 public constant MIN_BLOCK_DELAY = 1;
    mapping(address => uint256) public activeSwaps;
    ConfidentialERC20Wrapper public confidentialERC20Wrapper0;
    ConfidentialERC20Wrapper public confidentialERC20Wrapper1;
    LPRewardVault public lpRewardVault;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function _beforeInitialize(address, PoolKey calldata _poolKey, uint160) internal override returns (bytes4) {
        // require that pool key should not be already set
        require(!initialized, "Only one pool can be initialized");
        poolKey = _poolKey;
        initialized = true;
        return this.beforeInitialize.selector;
    }

    function _beforeSwap(
        address,
        PoolKey calldata key,
        SwapParams calldata params,
        bytes calldata
    ) internal override returns (bytes4, BeforeSwapDelta, uint24) {
        console2.log("before swap called");
        return (this.beforeSwap.selector, BeforeSwapDeltaLibrary.ZERO_DELTA, 0);
    }

    function _afterSwap(
        address,
        PoolKey calldata,
        SwapParams calldata,
        BalanceDelta,
        bytes calldata
    ) internal override returns (bytes4, int128) {
        console2.log("after swap called");
        return (this.afterSwap.selector, 0);
    }

    // if 1, multiply by 100
    // if 2, multiply by 100,000
    // if 3, divide by 100
    // if 4, divide by 100,000
    function transformAmountIn(euint256 amountIn, euint256 eAmountInTransform) internal returns (euint256) {
        amountIn = eAmountInTransform.eq(1).select(amountIn.mul(uint256(100).asEuint256()), amountIn);
        amountIn = eAmountInTransform.eq(2).select(amountIn.mul(uint256(100000).asEuint256()), amountIn);
        amountIn = eAmountInTransform.eq(3).select(amountIn.div(uint256(100).asEuint256()), amountIn);
        amountIn = eAmountInTransform.eq(4).select(amountIn.div(uint256(100000).asEuint256()), amountIn);
        amountIn.allow(address(this));
        return amountIn;
    }

    function addESwap(ESwapInputParams calldata params) public returns (bool) {
        params.eZeroForOneInput.allow(address(this));
        params.arbAuctionFeeInput.allow(address(this));
        // check if any swaps are queued in the current block
        if (queuedSwapsForBlock[block.number].length == 0) {
            blockEncryptedState[block.number] = uint256(0).asEuint256();
            blockEncryptedState[block.number].allow(address(this));
            blockArbAuctionWinnerEncryptedTxIndex[block.number] = uint256(0).asEuint256();
            blockArbAuctionWinnerEncryptedTxIndex[block.number].allow(address(this));
            blockArbAuctionWinnerEncryptedTxAmount[block.number] = params.arbAuctionFeeInput;
            blockArbAuctionWinnerEncryptedTxAmount[block.number].allow(address(this));
            blockAmountInTransformEncrypted[block.number] = params.eAmountInTransform;
            blockAmountInTransformEncrypted[block.number].allow(address(this));
            pushEncryptedBlock(block.number);
            console2.log("pushed encrypted block", block.number);
        }
        require(queuedSwapsForBlock[block.number].length < MAX_QUEUE_PER_BLOCK, "Max queue per block reached");
        blockEncryptedState[block.number] = params.eZeroForOneInput.select(
            blockEncryptedState[block.number].shl(1),
            blockEncryptedState[block.number].shl(1).add(1)
        );
        euint256 eAmountInTransform = params.eAmountInTransform.gt(4).select(
            uint256(0).asEuint256(),
            params.eAmountInTransform
        );
        blockAmountInTransformEncrypted[block.number] = blockAmountInTransformEncrypted[block.number].shl(5).add(
            eAmountInTransform
        );
        eAmountInTransform.allow(address(this));
        euint256 eAmountIn = transformAmountIn(params.amountIn.asEuint256(), eAmountInTransform);
        eAmountIn.allow(address(this));
        ebool isZeroAndHasEnoughBalance = params.eZeroForOneInput.and(
            (confidentialERC20Wrapper0.getBalance(params.creator).ge(eAmountIn.add(params.arbAuctionFeeInput)))
        );
        isZeroAndHasEnoughBalance.allow(address(this));
        ebool isOneAndHasEnoughBalance = e.not(params.eZeroForOneInput).and(
            confidentialERC20Wrapper1.getBalance(params.creator).ge(eAmountIn.add(params.arbAuctionFeeInput))
        );
        isOneAndHasEnoughBalance.allow(address(this));
        ebool hasEnoughBalance = isZeroAndHasEnoughBalance.or(isOneAndHasEnoughBalance);
        hasEnoughBalance.allow(address(this));
        blockEncryptedState[block.number] = hasEnoughBalance.select(
            blockEncryptedState[block.number].shl(1),
            blockEncryptedState[block.number].shl(1).add(1)
        );
        // only transfer from zero hook if zero and has enough balance
        euint256 transferFromZeroToHook = isZeroAndHasEnoughBalance.select(
            eAmountIn.add(params.arbAuctionFeeInput),
            e.asEuint256(0)
        );
        // transferFromZeroToHook.allow(address(this));
        transferFromZeroToHook.allow(address(confidentialERC20Wrapper0));
        confidentialERC20Wrapper0.transferToHook(params.creator, transferFromZeroToHook);

        // only transfer from one hook if one and has enough balance
        euint256 transferFromOneToHook = isOneAndHasEnoughBalance.select(
            eAmountIn.add(params.arbAuctionFeeInput),
            e.asEuint256(0)
        );
        // transferFromOneToHook.allow(address(this));
        transferFromOneToHook.allow(address(confidentialERC20Wrapper1));
        confidentialERC20Wrapper1.transferToHook(params.creator, transferFromOneToHook);

        ebool isCurrentArbFeeGreaterThanMaxArbAuctionFee = params.arbAuctionFeeInput.gt(
            blockArbAuctionWinnerEncryptedTxAmount[block.number]
        );
        euint256 currentBlockSwapLengthEncrypted = queuedSwapsForBlock[block.number].length.asEuint256();
        currentBlockSwapLengthEncrypted.allow(address(this));
        blockArbAuctionWinnerEncryptedTxIndex[block.number] = isCurrentArbFeeGreaterThanMaxArbAuctionFee
            .and(hasEnoughBalance)
            .select(currentBlockSwapLengthEncrypted, blockArbAuctionWinnerEncryptedTxIndex[block.number]);
        blockArbAuctionWinnerEncryptedTxIndex[block.number].allow(address(this));
        blockArbAuctionWinnerEncryptedTxAmount[block.number] = isCurrentArbFeeGreaterThanMaxArbAuctionFee
            .and(hasEnoughBalance)
            .select(params.arbAuctionFeeInput, blockArbAuctionWinnerEncryptedTxAmount[block.number]);
        blockArbAuctionWinnerEncryptedTxAmount[block.number].allow(address(this));
        uint256 currentBlock = block.number;
        ESwapParams memory eSwapParams = ESwapParams({
            creator: params.creator,
            receiver: params.receiver,
            eZeroForOne: params.eZeroForOneInput,
            arbAuctionFee: params.arbAuctionFeeInput,
            eAmountInTransform: params.eAmountInTransform,
            amountIn: params.amountIn,
            sqrtPriceLimitX96: params.sqrtPriceLimitX96,
            deadline: params.deadline
        });
        queuedSwapsForBlock[currentBlock].push(eSwapParams);
        activeSwaps[params.creator]++;
        return true;
    }

    function requestDecryptionForBlock(uint256 blockNumber) public returns (bool) {
        // this block should be the first block in the encrypted orders queue
        require(peekEncryptedBlocks() == blockNumber, "Block not first in encrypted orders queue");
        // block should be at least MIN_BLOCK_DELAY blocks in the past
        require(
            blockNumber <= block.number - MIN_BLOCK_DELAY,
            "Block must be at least MIN_BLOCK_DELAY blocks in the past"
        );
        blockEncryptedState[blockNumber] = blockEncryptedState[blockNumber]
            .shl(80)
            .add(blockAmountInTransformEncrypted[blockNumber])
            .shl(16)
            .add(blockArbAuctionWinnerEncryptedTxIndex[blockNumber])
            .shl(128)
            .add(blockArbAuctionWinnerEncryptedTxAmount[blockNumber]);
        blockEncryptedState[blockNumber].allow(address(this));
        DecryptionParams memory decryptionParams = DecryptionParams({blockNumber: blockNumber});
        if (!blockDecryptionRequested[blockNumber]) {
            blockDecryptionRequested[blockNumber] = true;
            pushDecryptionRequest(blockNumber);
        }
        blockEncryptedState[blockNumber].requestDecryption(
            this.onDecryptionCallback.selector,
            abi.encode(decryptionParams)
        );
        return true;
    }

    function onDecryptionCallback(uint256, bytes32 decryptedBlockStateBytes, bytes memory data) external {
        // this block should be the first block in the encryption requests queue
        DecryptionParams memory decryptionParams = abi.decode(data, (DecryptionParams));
        blockDecryptedState[decryptionParams.blockNumber] = uint256(decryptedBlockStateBytes);
        console2.log("decrypted block state", blockDecryptedState[decryptionParams.blockNumber]);
        blockArbAuctionWinnerDecryptedTxAmount[decryptionParams.blockNumber] = getFirst128Bits(
            blockDecryptedState[decryptionParams.blockNumber]
        );
        console2.log(
            "blockArbAuctionWinnerDecryptedTxAmount",
            blockArbAuctionWinnerDecryptedTxAmount[decryptionParams.blockNumber]
        );
        blockDecryptedState[decryptionParams.blockNumber] = blockDecryptedState[decryptionParams.blockNumber] >> 128;
        blockArbAuctionWinnerDecryptedTxIndex[decryptionParams.blockNumber] = getFirst16Bits(
            blockDecryptedState[decryptionParams.blockNumber]
        );
        console2.log(
            "blockArbAuctionWinnerDecryptedTxIndex",
            blockArbAuctionWinnerDecryptedTxIndex[decryptionParams.blockNumber]
        );
        blockDecryptedState[decryptionParams.blockNumber] = blockDecryptedState[decryptionParams.blockNumber] >> 16;
        blockAmountInTransformDecrypted[decryptionParams.blockNumber] = getFirst80Bits(
            blockDecryptedState[decryptionParams.blockNumber]
        );
        console2.log("blockAmountInTransformDecrypted", blockAmountInTransformDecrypted[decryptionParams.blockNumber]);
        blockDecryptedState[decryptionParams.blockNumber] = blockDecryptedState[decryptionParams.blockNumber] >> 80;

        console2.log("remaining state ", blockDecryptedState[decryptionParams.blockNumber]);
        blockSwapsDecrypted[decryptionParams.blockNumber] = true;
        // pop from encrypted orders queue and add to decrypted orders queue
        popEncryptedBlocks();
        pushDecryptedBlock(decryptionParams.blockNumber);
    }

    function runESwap(uint256 decryptedBlock, uint256 i) public returns (bool) {
        // todo: create a function to run a single encrypted block
    }

    function runESwaps() public returns (bool) {
        // todo: create function to run encrypted swaps for a block
        return true;
    }

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return
            Hooks.Permissions({
                beforeInitialize: true,
                afterInitialize: false,
                beforeAddLiquidity: false,
                afterAddLiquidity: false,
                beforeRemoveLiquidity: false,
                afterRemoveLiquidity: false,
                beforeSwap: true,
                afterSwap: true,
                beforeDonate: false,
                afterDonate: false,
                beforeSwapReturnDelta: false,
                afterSwapReturnDelta: false,
                afterAddLiquidityReturnDelta: false,
                afterRemoveLiquidityReturnDelta: false
            });
    }

    function transferDisabled(address user) external view returns (bool) {
        return false;
    }

    function transferToConfidentialERC20Wrapper(address from, uint256 amount) external {}

    function getNthBit(uint256 _number, uint256 _n) public pure returns (uint256) {
        require(_n < 256, "Bit index out of bounds (0-255)");
        return (_number >> _n) & 1;
    }

    function getFirst64Bits(uint256 value) public pure returns (uint64) {
        // Create a mask with the first 64 bits set to 1
        uint256 mask = (1 << 64) - 1;

        // Apply the mask using bitwise AND
        // The result is implicitly converted to uint64 if it fits
        return uint64(value & mask);
    }

    function getFirst80Bits(uint256 value) public pure returns (uint80) {
        // Create a mask with the first 80 bits set to 1
        uint256 mask = (1 << 80) - 1;

        // Apply the mask using bitwise AND
        // The result is implicitly converted to uint80 if it fits
        return uint80(value & mask);
    }

    function getFirst16Bits(uint256 value) public pure returns (uint16) {
        // Create a mask with the first 16 bits set to 1
        uint256 mask = (1 << 16) - 1;

        // Apply the mask using bitwise AND
        // The result is implicitly converted to uint16 if it fits
        return uint16(value & mask);
    }

    function getFirst128Bits(uint256 value) public pure returns (uint128) {
        // Create a mask with the first 128 bits set to 1
        uint256 mask = (1 << 128) - 1;

        // Apply the mask using bitwise AND
        // The result is implicitly converted to uint128 if it fits
        return uint128(value & mask);
    }
}
