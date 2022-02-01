const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
function computerPlay() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      if (computerSelection === "PAPER") {
        return "You lose!";
      } else if (computerSelection === "SCISSORS") {
        return "You win!";
      } else {
        return "Draw!";
      }
      
    case "SCISSORS":
      if (computerSelection === "PAPER") {
        return "You win!";
      } else if (computerSelection === "SCISSORS") {
        return "Draw!";
      } else {
        return "You lose!";
      }
      break;
    case "PAPER":
      if (computerSelection === "PAPER") {
        return "Draw!";
      } else if (computerSelection === "SCISSORS") {
        return "You lose!";
      } else {
        return "You win!";
      }
      
  }
}

function game() {
  let playerWinCount = 0;
  const NUMOFROUNDS = 5;
  for (let index = 0; index < const; index++) {
    const playerChoice = prompt("Please type Rock, Paper or Scissors:").toUpperCase();
    const computerChoice = computerPlay();
    const roundResult = playRound(playerChoice, computerChoice)

    if (roundResult === "You win!") {
      playerWinCount++;
    }
    console.log(`You chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(roundResult);
  }

  console.log(`You won ${playerWinCount} games out of ${NUMOFROUNDS}`);
}

// Kick off the game
game();
