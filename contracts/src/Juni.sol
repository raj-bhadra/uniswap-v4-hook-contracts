// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {BaseHook} from "@openzeppelin/uniswap-hooks/src/base/BaseHook.sol";
import {IPoolManager, SwapParams} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {Hooks} from "@uniswap/v4-core/src/libraries/Hooks.sol";
import {SafeCast} from "@uniswap/v4-core/src/libraries/SafeCast.sol";
import {CurrencySettler} from "@openzeppelin/uniswap-hooks/src/utils/CurrencySettler.sol";
import {Currency} from "@uniswap/v4-core/src/types/Currency.sol";
import {PoolKey} from "@uniswap/v4-core/src/types/PoolKey.sol";
import {BeforeSwapDelta, BeforeSwapDeltaLibrary, toBeforeSwapDelta} from "@uniswap/v4-core/src/types/BeforeSwapDelta.sol";
import {ebool, e, euint256} from "@inco/lightning/src/Lib.sol";
import {ESwapParams, ESwapInputParams} from "./ESwapParams.sol";
import {IUniswapV4Router04} from "hookmate/interfaces/router/IUniswapV4Router04.sol";
import {BalanceDelta} from "@uniswap/v4-core/src/types/BalanceDelta.sol";
import {console2} from "forge-std/console2.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {DecryptionParams} from "./DecryptionParams.sol";
import {Blocks} from "./Blocks.sol";
import {IHook} from "./IHook.sol";
import {ConfidentialERC20Wrapper} from "./ConfidentialERC20Wrapper.sol";
import {LPRewardVault} from "./LPRewardVault.sol";

contract Juni is BaseHook, Blocks, IHook {
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

    struct ESwapRunInfo {
        uint256 amountIn;
        uint256 amountInMin;
        bool zeroForOne;
        bool hasEnoughBalance;
        uint256 arbAuctionFee;
        bool isWinner;
        uint256 txIndex;
    }

    constructor(
        IPoolManager _poolManager,
        IUniswapV4Router04 _swapRouter,
        ConfidentialERC20Wrapper _confidentialERC20Wrapper0,
        ConfidentialERC20Wrapper _confidentialERC20Wrapper1,
        LPRewardVault _lpRewardVault
    ) BaseHook(_poolManager) {
        swapRouter = _swapRouter;
        confidentialERC20Wrapper0 = _confidentialERC20Wrapper0;
        confidentialERC20Wrapper1 = _confidentialERC20Wrapper1;
        lpRewardVault = _lpRewardVault;
    }

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
        require(!locked, "locked");
        require(params.amountSpecified < 0, "amountSpecified must be negative as hook only supports exact input swaps");
        Currency specified = params.zeroForOne ? key.currency0 : key.currency1;
        uint256 specifiedAmount = uint256(-params.amountSpecified);
        if (params.zeroForOne) {
            console2.log("extracting base token to hook for token0 ", specifiedAmount);
            confidentialERC20Wrapper0.extractBaseTokenToHook(specifiedAmount);
            console2.log("extracted base token to hook for token0 ", specifiedAmount);
        } else {
            console2.log("extracting base token to hook for token1 ", specifiedAmount);
            confidentialERC20Wrapper1.extractBaseTokenToHook(specifiedAmount);
            console2.log("extracted base token to hook for token1 ", specifiedAmount);
        }
        IERC20(address(uint160(specified.toId()))).approve(address(swapRouter), specifiedAmount);
        return (this.beforeSwap.selector, BeforeSwapDeltaLibrary.ZERO_DELTA, 0);
    }

    function _afterSwap(
        address,
        PoolKey calldata,
        SwapParams calldata params,
        BalanceDelta,
        bytes calldata hookData
    ) internal override returns (bytes4, int128) {
        console2.log("afterSwap");
        ESwapRunInfo memory eSwapRunInfo = abi.decode(hookData, (ESwapRunInfo));
        if (eSwapRunInfo.isWinner) {
            console2.log("winner tx");
            console2.log("txIndex", eSwapRunInfo.txIndex);
            console2.log("arbAuctionFee", eSwapRunInfo.arbAuctionFee);
            if (params.zeroForOne) {
                console2.log("Paying Arb Auction Fee in token0", eSwapRunInfo.arbAuctionFee);
                confidentialERC20Wrapper0.extractBaseTokenToHook(eSwapRunInfo.arbAuctionFee);
                IERC20(confidentialERC20Wrapper0.baseERC20()).transfer(
                    address(lpRewardVault),
                    eSwapRunInfo.arbAuctionFee
                );
            } else {
                console2.log("Paying Arb Auction Fee in token1", eSwapRunInfo.arbAuctionFee);
                confidentialERC20Wrapper1.extractBaseTokenToHook(eSwapRunInfo.arbAuctionFee);
                IERC20(confidentialERC20Wrapper1.baseERC20()).transfer(
                    address(lpRewardVault),
                    eSwapRunInfo.arbAuctionFee
                );
            }
        }
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

    function transformAmountInDecrypted(uint256 amountIn, uint256 amountInTransform) internal pure returns (uint256) {
        if (amountInTransform == uint256(1)) {
            return amountIn * uint256(100);
        } else if (amountInTransform == uint256(2)) {
            return amountIn * uint256(100000);
        } else if (amountInTransform == uint256(3)) {
            return amountIn / uint256(100);
        } else if (amountInTransform == uint256(4)) {
            return amountIn / (uint256(100000));
        } else {
            return amountIn;
        }
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

    function requestDecryptionForEarliestEncryptedBlock() public returns (bool) {
        // if length is zero, do nothing and return true
        if (lengthEncryptedBlocks() == 0) {
            return true;
        }
        uint256 earliestEncryptedBlock = peekEncryptedBlocks();
        return requestDecryptionForBlock(earliestEncryptedBlock);
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

    function getESwapRunInfo(uint256 decryptedBlock, uint256 i) internal view returns (ESwapRunInfo memory) {
        uint256 decryptedBlockState = blockDecryptedState[decryptedBlock];
        uint256 length = queuedSwapsForBlock[decryptedBlock].length;
        uint256 amountIn = queuedSwapsForBlock[decryptedBlock][i].amountIn;
        uint256 amountInTransform = (blockAmountInTransformDecrypted[decryptedBlock] >> ((length - 1 - i) * 5)) & 0x1F;
        console2.log("amountInTransform ", amountInTransform);
        return
            ESwapRunInfo({
                amountIn: transformAmountInDecrypted(amountIn, amountInTransform),
                amountInMin: 0,
                zeroForOne: getNthBit(decryptedBlockState, (length * 2 - 1) - (i * 2)) == 0,
                hasEnoughBalance: getNthBit(decryptedBlockState, (length * 2 - 1) - (i * 2 + 1)) == 0,
                arbAuctionFee: i == blockArbAuctionWinnerDecryptedTxIndex[decryptedBlock]
                    ? blockArbAuctionWinnerDecryptedTxAmount[decryptedBlock]
                    : 0,
                isWinner: i == blockArbAuctionWinnerDecryptedTxIndex[decryptedBlock],
                txIndex: i
            });
    }

    function runESwap(uint256 decryptedBlock, uint256 i) public returns (bool) {
        ESwapParams memory eSwapParams = queuedSwapsForBlock[decryptedBlock][i];
        ESwapRunInfo memory eSwapRunInfo = getESwapRunInfo(decryptedBlock, i);
        console2.log("=================");
        console2.log("For swap number ", i);
        console2.log("zeroForOne", eSwapRunInfo.zeroForOne);
        console2.log("hasEnoughBalance", eSwapRunInfo.hasEnoughBalance);
        activeSwaps[eSwapParams.creator]--;
        if (!eSwapRunInfo.hasEnoughBalance) {
            console2.log("swap not executed because creator does not have enough balance for amount in");
            return false;
        }
        try
            swapRouter.swapExactTokensForTokens({
                amountIn: eSwapRunInfo.amountIn,
                amountOutMin: eSwapRunInfo.amountInMin,
                zeroForOne: eSwapRunInfo.zeroForOne,
                poolKey: poolKey,
                hookData: abi.encode(eSwapRunInfo),
                receiver: address(this),
                deadline: eSwapParams.deadline
            })
        returns (BalanceDelta delta) {
            if (eSwapRunInfo.zeroForOne) {
                console2.log("wrapping amount1 to receiver ", uint256(uint128(delta.amount1())));
                confidentialERC20Wrapper1.wrapFromHook(eSwapParams.receiver, uint256(uint128(delta.amount1())));
            } else {
                console2.log("wrapping amount0 to receiver ", uint256(uint128(delta.amount0())));
                confidentialERC20Wrapper0.wrapFromHook(eSwapParams.receiver, uint256(uint128(delta.amount0())));
            }
            console2.log("delta", delta.amount0());
            console2.log("delta", delta.amount1());
            console2.log("=================");
            return true;
        } catch (bytes memory) {
            console2.log("error swap failed");
            console2.log("=================");
            return false;
        }
    }

    function runESwaps() public returns (bool) {
        locked = false;
        if (lengthDecryptedBlocks() == 0) {
            // no decrypted blocks to run
            return true;
        }
        // get the first block in the decrypted orders queue
        uint256 decryptedBlock = peekDecryptedBlocks();
        // uint256 decryptedBlockState = blockDecryptedState[decryptedBlock];
        uint256 length = queuedSwapsForBlock[decryptedBlock].length;
        uint256 winnerIndex = blockArbAuctionWinnerDecryptedTxIndex[decryptedBlock];
        console2.log("running winner swap");
        runESwap(decryptedBlock, winnerIndex);
        for (uint256 i = 0; i < length; i++) {
            if (i == winnerIndex) {
                console2.log("winner swap skip as already done");
                continue;
            }
            console2.log("running swap number ", i);
            runESwap(decryptedBlock, i);
        }
        // pop from decrypted orders queue and add to processed orders queue
        popDecryptedBlocks();
        pushProcessedBlock(decryptedBlock);
        locked = true;
        return true;
    }

    function transferToConfidentialERC20Wrapper(address from, uint256 amount) external {
        bool isWrapperForToken0 = address(msg.sender) == address(confidentialERC20Wrapper0);
        bool isWrapperForToken1 = address(msg.sender) == address(confidentialERC20Wrapper1);
        require(
            isWrapperForToken0 || isWrapperForToken1,
            "Only confidentialERC20Wrapper0 or confidentialERC20Wrapper1 can call this function"
        );
        address baseToken = isWrapperForToken0
            ? address(confidentialERC20Wrapper0.baseERC20())
            : address(confidentialERC20Wrapper1.baseERC20());
        address wrapper = isWrapperForToken0 ? address(confidentialERC20Wrapper0) : address(confidentialERC20Wrapper1);
        IERC20(baseToken).transferFrom(from, wrapper, amount);
    }

    function transferDisabled(address user) external view returns (bool) {
        return activeSwaps[user] > 0;
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
