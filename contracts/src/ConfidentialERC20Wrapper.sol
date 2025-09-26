// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {euint256, ebool, e} from "@inco/lightning/src/Lib.sol";
import {ConfidentialERC20} from "./ConfidentialERC20.sol";
import {IHook} from "./IHook.sol";
import {console2} from "forge-std/console2.sol";

interface IERC20extended is IERC20 {
    function decimals() external view returns (uint8);
}

contract ConfidentialERC20Wrapper is ConfidentialERC20 {
    using SafeERC20 for IERC20;
    using e for euint256;
    using e for ebool;
    using e for uint256;
    using e for bytes;
    using e for address;
    // Events
    event Wrap(address indexed user, uint256 amount);
    mapping(address => bool) public hasWrapped;

    IHook public hook;

    IERC20 public baseERC20;

    constructor(address _baseERC20) {
        baseERC20 = IERC20(_baseERC20);
    }

    function setHook(IHook _hook) external onlyOwner {
        hook = _hook;
    }

    function wrap(uint256 wrappedAmount) external {
        console2.log("wrap for ", address(baseERC20));
        console2.log("msg.sender", msg.sender);
        console2.log("wrapping amount", wrappedAmount);
        uint256 baseAllowance = baseERC20.allowance(msg.sender, address(hook));
        require(baseAllowance >= wrappedAmount, "Allowance is not enough");
        uint256 currentBalance = baseERC20.balanceOf(address(this));
        hook.transferToConfidentialERC20Wrapper(msg.sender, wrappedAmount);
        uint256 newBalance = baseERC20.balanceOf(address(this));
        require(newBalance >= currentBalance + wrappedAmount, "Transfer failed");
        _totalSupply += wrappedAmount;
        _mint(wrappedAmount.asEuint256());
        hasWrapped[msg.sender] = true;
        emit Wrap(msg.sender, wrappedAmount);
    }

    function wrapFromHook(address recipient, uint256 wrappedAmount) public {
        // only hook can call
        hasWrapped[recipient] = true;
        require(msg.sender == address(hook), "Only hook can call this function");
        uint256 currentHookBalance = baseERC20.balanceOf(address(hook));
        require(currentHookBalance >= wrappedAmount, "Balance of hook is not enough");
        uint256 currentBalance = baseERC20.balanceOf(address(this));
        hook.transferToConfidentialERC20Wrapper(recipient, wrappedAmount);
        uint256 newBalance = baseERC20.balanceOf(address(this));
        require(newBalance >= currentBalance + wrappedAmount, "Transfer failed");
        _totalSupply += wrappedAmount;
        _mintTo(recipient, wrappedAmount.asEuint256());
        emit Wrap(msg.sender, wrappedAmount);
    }

    function transferDisabled(address user) external view returns (bool) {
        return hook.transferDisabled(user);
    }

    // Transfer functions
    function transfer(address to, bytes calldata encryptedAmount) public override returns (bool) {
        require(!hook.transferDisabled(msg.sender), "Transfer disabled");
        transfer(to, e.newEuint256(encryptedAmount, msg.sender));
        return true;
    }

    function transferToHook(address from, euint256 amount) public returns (bool) {
        // require only hook can call
        require(msg.sender == address(hook), "Only hook can call this function");
        ebool canTransfer = e.ge(balances[from], amount);
        _transfer(from, address(hook), amount, canTransfer);
        return true;
    }

    // hook makes all checks with respect to the amount before calling this function
    // it is made sure that no unsafe amounts of tokens are extracted from the wrapper
    function extractBaseTokenToHook(uint256 amount) public returns (bool) {
        require(msg.sender == address(hook), "Only hook can call this function");
        require(baseERC20.balanceOf(address(this)) >= amount, "Balance of wrapper is not enough");
        baseERC20.transfer(address(hook), amount);
        _burnTo(address(hook), amount.asEuint256());
        return true;
    }

    function transfer(address to, euint256 amount) public override returns (bool) {
        require(!hook.transferDisabled(msg.sender), "Transfer disabled");
        ebool canTransfer = e.ge(balances[msg.sender], amount);
        _transfer(msg.sender, to, amount, canTransfer);
        return true;
    }

    function getBalance(address user) public returns (euint256) {
        euint256 balance;
        if (!hasWrapped[user]) {
            balance = e.asEuint256(0);
        } else {
            balance = balances[user];
        }
        balance.allow(address(this));
        balance.allow(user);
        balance.allow(address(hook));
        return balance;
    }

    // TransferFrom functions
    function transferFrom(address from, address to, bytes calldata encryptedAmount) public override returns (bool) {
        require(!hook.transferDisabled(from), "Transfer disabled");
        transferFrom(from, to, e.newEuint256(encryptedAmount, msg.sender));
        return true;
    }

    function transferFrom(address from, address to, euint256 amount) public override returns (bool) {
        require(!hook.transferDisabled(from), "Transfer disabled");
        ebool isTransferable = _updateAllowance(from, msg.sender, amount);
        _transfer(from, to, amount, isTransferable);
        return true;
    }
}
