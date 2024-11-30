pragma solidity ^0.4.17;

contract message{
    string public message;

    function setMessage(string memory _newmessage) public{
        message=_newmessage;
    }

    function getMessage() public view returns(string memory){
        return message;
    }
}