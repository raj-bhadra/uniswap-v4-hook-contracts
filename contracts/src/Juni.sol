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
import {ESwapInputParams} from "./ESwapParams.sol";

contract Juni is BaseHook, Blocks, IHook {
    using PoolIdLibrary for PoolKey;
    using CurrencySettler for Currency;
    using e for euint256;
    using e for ebool;
    using e for bool;
    using e for bytes;
    using e for address;
    using e for uint256;

    bool public initialized;
    PoolKey public poolKey;

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

    function addESwap(ESwapInputParams calldata params) public returns (bool) {
        // todo: create a function to add an encrypted swap
        return true;
    }

    function requestDecryptionForBlock(uint256 blockNumber) public returns (bool) {
        // todo: request decryption for a block
        return true;
    }

    function onDecryptionCallback(uint256, bytes32 decryptedBlock, bytes memory data) external {
        // todo: create a function to handle decrypted state callback for a block
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
}
