# Solidity Contract Deployment and Interaction

## Overview

This repository demonstrates how to deploy and interact with a simple Solidity smart contract on the Ethereum blockchain using `Web3.js`. The contract allows setting and retrieving a message stored on the blockchain.

## Project Structure

- **compile.js**: Compiles the Solidity contract code and exports the ABI and Bytecode.
- **deploy.js**: Deploys the compiled contract to the Ethereum network and interacts with it (e.g., setting and getting the message).
- **contracts/Inbox.sol**: The Solidity contract that defines the `message` contract with `setMessage` and `getMessage` functions.
- **test**: Contains scripts for testing interactions with the deployed contract.
- **package.json**: Contains dependencies and scripts for the project.

## Contract: `Inbox.sol`

The contract provides the following functionalities:

- **setMessage**: Allows a user to store a string message on the blockchain.
- **getMessage**: Returns the stored message from the blockchain.
- **message**: A public variable that stores the message.

Transaction Hash - 0x7cdc0694f4f4cca0dff7218911acdb7508f66a13e34b4a21c3ae5adc0c71828c
