// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LPRewardVault {
    IERC20 public token0;
    IERC20 public token1;
    address public token0Address;
    address public token1Address;

    constructor(address _token0, address _token1) {
        token0Address = _token0;
        token1Address = _token1;
        token0 = IERC20(_token0);
        token1 = IERC20(_token1);
    }

    function getBalances() public view returns (uint256, uint256) {
        return (token0.balanceOf(address(this)), token1.balanceOf(address(this)));
    }

    function getToken0() public view returns (address) {
        return token0Address;
    }

    function getToken1() public view returns (address) {
        return token1Address;
    }
}
