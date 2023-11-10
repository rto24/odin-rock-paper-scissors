let computerMove = '';

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    computerMove = 'Rock';
  } else if (randomNum === 2) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }
}

getComputerChoice();

console.log(computerMove);

