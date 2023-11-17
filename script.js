let score = {
  playerScore: 0,
  computerScore: 0
}; 

updateScore();

document.querySelector('.rock-btn').addEventListener('click', () => {
  playRound('Rock');
});

document.querySelector('.paper-btn').addEventListener('click', () => {
  playRound('Paper');
});

document.querySelector('.scissors-btn').addEventListener('click', () => {
  playRound('Scissors');
});

function playRound(playerSelection) {
  
  const computerSelection = getComputerChoice();
  let result = '';
  
  if (playerSelection == 'Rock') {
    if (computerSelection === 'Rock') {
      result = "It's a Tie!";
    } else if (computerSelection === 'Paper') {
      result = "You Lose! Paper beats Rock";
    } else if (computerSelection === 'Scissors' )
      result = "You Win! Rock beats Scissors";

    } else if (playerSelection == 'Paper') {
      if (computerSelection === 'Rock') {
        result = "You Win! Paper beats Rock";
      } else if (computerSelection === 'Paper') {
        result = "It's a Tie!";
      } else if (computerSelection === 'Scissors' )
        result = "You Lose! Scissors beats Paper";

    } else { 
      if (computerSelection === 'Rock') {
        result = "You Lose! Rock beats Scissors";
      } else if (computerSelection === 'Paper') {
        result = "You Win! Scissors beats Paper";
      } else if (computerSelection === 'Scissors' )
        result = "It's a Tie!";
    }
  
  if (result === "You Win! Rock beats Scissors" ||
      result === "You Win! Paper beats Rock" ||
      result === "You Win! Scissors beats Paper") {
        score.playerScore += 1;
      } else if (result === "You Lose! Paper beats Rock" ||
                 result === "You Lose! Scissors beats Paper" ||
                 result === "You Lose! Rock beats Scissors") {
        score.computerScore += 1;        
      } 
    
    updateScore();
  
    document.querySelector('.result').textContent = result; 
    
};

function updateScore() {

  document.querySelector('.score').textContent = `
  Score: Player ${score.playerScore} Computer ${score.computerScore}`;

  if (score.playerScore === 5) {
    document.querySelector('.score').textContent = `
    Game over! Player wins`;
  } else if (score.computerScore === 5) {
    document.querySelector('.score').textContent = `
    Game over! Computer wins`
  }
};

function getComputerChoice() {
  let computerSelection = '';
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    computerSelection = 'Rock';
  } else if (randomNum === 2) {
    computerSelection = 'Paper';
  } else {
    computerSelection ='Scissors';
  }
  return computerSelection;
};









  

  
