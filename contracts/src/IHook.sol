// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IHook {
    function transferDisabled(address user) external view returns (bool);
    function transferToConfidentialERC20Wrapper(address from, uint256 amount) external;
}
