// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";
import {MockERC20} from "solmate/src/test/utils/mocks/MockERC20.sol";
import {ConfidentialERC20Wrapper} from "../src/ConfidentialERC20Wrapper.sol";
// TODO: set hook address in confidential ERC20 wrapper

contract DeployToken is Script {
    function run() public {
        vm.startBroadcast();
        MockERC20 token0 = new MockERC20("Test Token", "TEST", 18);
        // token0.mint(address(this), 10_000_000 ether);
        MockERC20 token1 = new MockERC20("Test Token", "TEST", 18);
        //token1.mint(address(this), 10_000_000 ether);
        ConfidentialERC20Wrapper confidentialERC20Wrapper0 = new ConfidentialERC20Wrapper(address(token0));
        ConfidentialERC20Wrapper confidentialERC20Wrapper1 = new ConfidentialERC20Wrapper(address(token1));
        if (address(token0) < address(token1)) {
            console2.log("token0 < token1");
            console2.log("token0", address(token0));
            console2.log("token1", address(token1));
            console2.log("confidentialERC20Wrapper0", address(confidentialERC20Wrapper0));
            console2.log("confidentialERC20Wrapper1", address(confidentialERC20Wrapper1));
        } else {
            console2.log("token0 >= token1");
            console2.log("token0", address(token1));
            console2.log("token1", address(token0));
            console2.log("confidentialERC20Wrapper0", address(confidentialERC20Wrapper1));
            console2.log("confidentialERC20Wrapper1", address(confidentialERC20Wrapper0));
        }
        vm.stopBroadcast();
    }
}
