// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import {SimpleConfidentialToken} from "../SimpleConfidentialToken.sol";
import {IncoTest} from "@inco/lightning/src/test/IncoTest.sol";
// import {e} from "@inco/lightning/src/Lib.sol";

uint256 constant GWEI = 1e9;

contract TestSimpleConfidentialToken is IncoTest {
    SimpleConfidentialToken token;

    function setUp() public override {
        super.setUp();
        token = new SimpleConfidentialToken();
        token.transfer(alice, fakePrepareEuint256Ciphertext(10 * GWEI));
    }

    function testTransfer() public {
        vm.prank(alice);
        token.transfer(bob, fakePrepareEuint256Ciphertext(1 * GWEI));
        processAllOperations();
        uint256 decryptedBobBalance = getUint256Value(token.balanceOf(bob));
        uint256 decryptedAliceBalance = getUint256Value(token.balanceOf(alice));
        assertEq(decryptedBobBalance, 1 * GWEI);
        assertEq(decryptedAliceBalance, 9 * GWEI);
    }
}
