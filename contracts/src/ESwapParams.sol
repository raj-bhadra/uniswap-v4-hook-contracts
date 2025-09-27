// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ebool, euint256} from "@inco/lightning/src/Lib.sol";

// todo: change euint to bytes 32 input
// as of now, bytes 32 input is not working well
// in forge mock tests
struct ESwapInputParams {
    address creator;
    address receiver;
    bytes eZeroForOneInput;
    bytes eArbAuctionFeeInput;
    bytes eAmountInTransform;
    uint256 amountIn;
    uint160 sqrtPriceLimitX96;
    uint256 deadline;
}

struct ESwapParams {
    address creator;
    address receiver;
    ebool eZeroForOne;
    euint256 eArbAuctionFee;
    euint256 eAmountInTransform;
    uint256 amountIn;
    uint160 sqrtPriceLimitX96;
    uint256 deadline;
}
