// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Hooks} from "@uniswap/v4-core/src/libraries/Hooks.sol";
import {HookMiner} from "@uniswap/v4-periphery/src/utils/HookMiner.sol";

import {BaseScript} from "./base/BaseScript.sol";
import {ConfidentialERC20Wrapper} from "../src/ConfidentialERC20Wrapper.sol";
import {LPRewardVault} from "../src/LPRewardVault.sol";
import {Juni} from "../src/Juni.sol";

/// @notice Mines the address and deploys the Juni.sol Hook contract
contract DeployHookScript is BaseScript {
    function run() public {
        // hook contracts must have specific flags encoded in the address
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.BEFORE_INITIALIZE_FLAG | Hooks.AFTER_SWAP_FLAG);
        vm.startBroadcast();
        LPRewardVault lpRewardVault = new LPRewardVault(address(token0), address(token1));
        vm.stopBroadcast();

        // Mine a salt that will produce a hook address with the correct flags
        bytes memory constructorArgs = abi.encode(
            poolManager,
            swapRouter,
            confidentialERC20Wrapper0,
            confidentialERC20Wrapper1,
            lpRewardVault
        );
        (address hookAddress, bytes32 salt) = HookMiner.find(
            CREATE2_FACTORY,
            flags,
            type(Juni).creationCode,
            constructorArgs
        );

        // Deploy the hook using CREATE2
        vm.startBroadcast();
        Juni juni = new Juni{salt: salt}(
            poolManager,
            swapRouter,
            confidentialERC20Wrapper0,
            confidentialERC20Wrapper1,
            lpRewardVault
        );
        confidentialERC20Wrapper0.setHook(juni);
        confidentialERC20Wrapper1.setHook(juni);
        vm.stopBroadcast();

        require(address(juni) == hookAddress, "DeployHookScript: Hook Address Mismatch");
    }
}
