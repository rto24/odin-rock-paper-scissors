function getComputerChoice() {
  let computerSelection = '';
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    computerSelection === 'Rock';
  } else if (randomNum === 2) {
    computerSelection === 'Paper';
  } else {
    computerSelection === 'Scissors';
  }
  return computerSelection;
};

/*
let playerInput = (prompt ("Choose Rock, Paper, or Scissors"));
*/

let computerSelection = '';

document.querySelector('.rock-btn').addEventListener('click', () => {
  playRound('Rock', computerSelection);
});

document.querySelector('.paper-btn').addEventListener('click', () => {
  playRound('Paper', computerSelection);
});

document.querySelector('.scissors-btn').addEventListener('click', () => {
  playRound('Scissors', computerSelection);
});


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



let score = {
  playerScore: 0,
  computerScore: 0
};

/*
function game() {
  playRound(playerSelection, computerSelection);
  if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scossirs beats Paper") {
    score.playerScore++;
  } else if (result === "It's a Tie!") {
    score.playerScore += 0;
    score.computerScore += 0;
  } else {
    score.computerScore++;
  }
  return score;
};
*/

/*
for (let i = 1; i < 5; i++) game();
  
function endMessage() {   
  let resetStatement = "";
  if (score.playerScore === 5 || score.computerScore === 5 || result === "It's a Tie!") {
    resetStatement = "Please refresh to play again!";
  }
  return resetStatement;
}
*/









  

  
