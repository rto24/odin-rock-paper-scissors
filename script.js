let computerSelection = '';

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    computerSelection = 'Rock';
  } else if (randomNum === 2) {
    computerSelection = 'Paper';
  } else {
    computerSelection = 'Scissors';
  }
}

let playerInput = (prompt ("Choose Rock, Paper, or Scissors"))

const playerSelection = playerInput;

function playRound(playerSelection, computerSelection) {

  let result = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Rock') {
      result = "It's a Tie!";
    } else if (computerSelection === 'Paper') {
      result = "You Lose! Paper beats Rock";
    } else (computerSelection === 'Scissors' )
      result = "You Win! Rock beats Scissors";

    } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Rock') {
        result = "You Win! Paper beats Rock";
      } else if (computerSelection === 'Paper') {
        result = "It's a Tie!";
      } else (computerSelection === 'Scissors' )
        result = "You Lose! Scissors beats Paper";

    } else { 
      if (computerSelection === 'Rock') {
        result = "You Lose! Rock beats Scissors";
      } else if (computerSelection === 'Paper') {
        result = "You Win! Scissors beats Paper";
      } else (computerSelection === 'Scissors' )
        result = "It's a Tie!";
    }
    return result;
};

console.log(playRound(playerSelection, computerSelection));