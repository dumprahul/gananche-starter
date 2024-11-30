const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, bytecode } = require('./compile');
const { default: Ganache } = require('ganache');

const web3=new Web3(Ganache.provider());

const deploy = async () => {
  const accounts = await web3.eth.getAccounts(); // Get available Ethereum accounts
  
  console.log('Deploying contract from account:', accounts[0]);
  
  const result = await new web3.eth.Contract(abi) // Create contract instance
    .deploy({ data: bytecode, arguments: ['Hello, this is a deployed message!asdasdasdasdasd'] }) // Deploy the contract with bytecode
    .send({ from: accounts[0], gas: '1000000'}); // Send transaction to deploy contract

  console.log(result); // Log the contract address after deployment
};

deploy()
  .then(() => console.log('Contract deployment successful!'))
  .catch((error) => console.error('Error deploying contract:', error));

