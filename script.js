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

getComputerChoice();

console.log(computerSelection);

const playerSelection = 'rock';


function playRound(playerSelection, computerSelection) {
  
  if (computerSelection === 'Rock') {
    return "It's a Tie!";
  } else if (computerSelection === 'Paper') {
    return "You Lose! Paper beats Rock";
  } else (computerSelection === 'Scissors' )
    return "You Win! Rock beats Scissors"
  }


console.log(playRound(playerSelection, computerSelection));

