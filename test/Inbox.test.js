const ganache = require('ganache');
const { Web3 } = require('web3');
const web3= new Web3(ganache.provider());

// updated ganache and web3 imports added for convenience

// contract test code will go here
async function getAccounts(){
    try{
        const allAccounts=await web3.eth.getAccounts();
        console.log(allAccounts);
    }catch(e){
        console.log('The error is',e);
    }
};

getAccounts();