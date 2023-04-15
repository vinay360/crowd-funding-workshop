// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract OddEve {
    address public player1;
    address public player2;
    uint256 private num1 = 0;
    uint256 private num2 = 0;
    uint256 public winner = 0;
    constructor (address _player1, address _player2) {
        player1 = _player1;
        player2 = _player2;
    }

    function updateWinner() private {
        if(num1 != 0 && num2 != 0) {
            if((num1+num2)%2 == 1)
                winner = 1;
            else
                winner = 2;
        }
    }

    function pickNumber(uint256 num) public {
        require(msg.sender == player1 || msg.sender == player2,"You are not a player");
        require(winner == 0, "Game Over");
        if(msg.sender == player1) 
            num1 = num;
        else 
            num2 = num;
        updateWinner();
    }
}
