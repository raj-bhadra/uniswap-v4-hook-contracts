// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {BaseScript} from "./base/BaseScript.sol";
import {MockERC20} from "solmate/src/test/utils/mocks/MockERC20.sol";

contract MintTokens is BaseScript {
    function run() public {
        vm.startBroadcast();
        MockERC20(address(token0)).mint(address(deployerAddress), 10_000_000 ether);
        MockERC20(address(token1)).mint(address(deployerAddress), 10_000_000 ether);
        vm.stopBroadcast();
    }
}
