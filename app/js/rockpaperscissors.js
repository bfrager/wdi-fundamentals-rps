////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log('Please choose either "rock", "paper", or "scissors".')
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else if (computerMove === 'scissors') {
            winner = 'player';
        } else {
            winner = 'tie';
        }
    }
    if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';
        } else if (computerMove === 'rock') {
            winner = 'player';
        } else {
            winner = 'tie';
        }
    }
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else if (computerMove === 'paper') {
            winner = 'player';
        } else {
            winner = 'tie';
        }
    }
    return winner;
}

function playToX() {
    console.log('Let\'s play Rock, Paper, Scissors');
    var playerWins = 0;
    var computerWins = 0;
    var gameTo = playTo();
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < gameTo) && (computerWins < gameTo)) {
        var playerTurn = getPlayerMove();
        var computerTurn = getComputerMove();
        console.log('Player chose ' + playerTurn + ' & Computer chose ' + computerTurn);
        var roundWinner = getWinner(playerTurn, computerTurn);
        if (roundWinner === 'player') {
            playerWins += 1;
            console.log(roundWinner + ' wins!');
        } else if (roundWinner === 'computer') {
            computerWins += 1;
            console.log(roundWinner + ' wins!');
        } else {
            console.log('Tie sucka!');
        }
        console.log('The score is currently Player: ' + playerWins + ' to Computer: ' + computerWins + '\n');
    }
    if (playerWins === gameTo) {
        console.log('Player wins the game!');
    } else if (computerWins === gameTo) {
        console.log('Computer wins the game!');
    }
    return [playerWins, computerWins];
}

function playTo() {
    console.log('What would you like to play to?');
    return prompt();
}