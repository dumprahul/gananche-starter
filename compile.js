// compile code will go here
const path=require('path');
const fs=require('fs');
const solc=require('solc');

const filepath=path.resolve(__dirname,'contracts','Inbox.sol');
const readFile=fs.readFileSync(filepath,'utf-8');

// Compile the contract
const output = solc.compile(readFile, 1);

// Extract the ABI and bytecode for the 'message' contract
const abi = JSON.parse(output.contracts[':message'].interface);
const bytecode = output.contracts[':message'].bytecode;
console.log(abi);
console.log(bytecode);

// Export the ABI and bytecode
module.exports = { abi, bytecode };
