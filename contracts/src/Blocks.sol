// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import {DoubleEndedQueue} from "@openzeppelin/contracts/utils/structs/DoubleEndedQueue.sol";

contract Blocks {
    DoubleEndedQueue.Bytes32Deque public encryptedOrders;
    DoubleEndedQueue.Bytes32Deque public decryptedOrders;
    DoubleEndedQueue.Bytes32Deque public processedOrders;
    DoubleEndedQueue.Bytes32Deque public decryptionRequests;

    function pushEncryptedBlock(uint256 _blockNumber) public {
        DoubleEndedQueue.pushBack(encryptedOrders, bytes32(_blockNumber));
    }

    function peekEncryptedBlocks() public view returns (uint256) {
        return uint256(DoubleEndedQueue.front(encryptedOrders));
    }

    function popEncryptedBlocks() public returns (uint256) {
        return uint256(DoubleEndedQueue.popFront(encryptedOrders));
    }

    function lengthEncryptedBlocks() public view returns (uint256) {
        return DoubleEndedQueue.length(encryptedOrders);
    }

    function isEmptyEncryptedBlocks() public view returns (bool) {
        return DoubleEndedQueue.empty(encryptedOrders);
    }

    function pushDecryptedBlock(uint256 _blockNumber) public {
        DoubleEndedQueue.pushBack(decryptedOrders, bytes32(_blockNumber));
    }

    function peekDecryptedBlocks() public view returns (uint256) {
        return uint256(DoubleEndedQueue.front(decryptedOrders));
    }

    function popDecryptedBlocks() public returns (uint256) {
        return uint256(DoubleEndedQueue.popFront(decryptedOrders));
    }

    function lengthDecryptedBlocks() public view returns (uint256) {
        return DoubleEndedQueue.length(decryptedOrders);
    }

    function isEmptyDecryptedBlocks() public view returns (bool) {
        return DoubleEndedQueue.empty(decryptedOrders);
    }

    function pushProcessedBlock(uint256 _blockNumber) public {
        DoubleEndedQueue.pushBack(processedOrders, bytes32(_blockNumber));
    }

    function peekProcessedBlocks() public view returns (uint256) {
        return uint256(DoubleEndedQueue.front(processedOrders));
    }

    function popProcessedBlocks() public returns (uint256) {
        return uint256(DoubleEndedQueue.popFront(processedOrders));
    }

    function lengthProcessedBlocks() public view returns (uint256) {
        return DoubleEndedQueue.length(processedOrders);
    }

    function isEmptyProcessedBlocks() public view returns (bool) {
        return DoubleEndedQueue.empty(processedOrders);
    }

    function pushDecryptionRequest(uint256 _blockNumber) public {
        DoubleEndedQueue.pushBack(decryptionRequests, bytes32(_blockNumber));
    }

    function peekDecryptionRequests() public view returns (uint256) {
        return uint256(DoubleEndedQueue.front(decryptionRequests));
    }

    function popDecryptionRequests() public returns (uint256) {
        return uint256(DoubleEndedQueue.popFront(decryptionRequests));
    }

    function lengthDecryptionRequests() public view returns (uint256) {
        return DoubleEndedQueue.length(decryptionRequests);
    }

    function isEmptyDecryptionRequests() public view returns (bool) {
        return DoubleEndedQueue.empty(decryptionRequests);
    }
}
