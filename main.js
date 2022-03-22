// Declarations
let playerWinCount = 0;
let cpuWinCount = 0;
const NUMOFROUNDS = 5;
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

function game(playerChoice) {
  
  
  // for (let index = 0; index < const; index++) {

    const computerChoice = computerPlay();
    const roundResult = playRound(playerChoice, computerChoice)

    if (roundResult === "You win!") {
      playerWinCount++;
    } else if (roundResult === "You lose!") {
      cpuWinCount++;
    }
    console.log(`You chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    console.log(roundResult);
  //}

  console.log(`You won ${playerWinCount} games out of ${NUMOFROUNDS}`);
  let results = document.getElementById('results');
  results.innerHTML = `You chose ${playerChoice}. <br>` + `Computer chose ${computerChoice}.<br>` + 
                      roundResult + `<br>You won ${playerWinCount} games. CPU won ${cpuWinCount} games.`;

  let winner = null;
  if (playerWinCount === 5) {
    winner = "You";
  } else if (cpuWinCount === 5) {
    winner = "CPU";
  }

  if (winner != null){
    results.innerHTML += `<br> ${winner} won!`
  }
}



// Kick off the game
const playerChoices = document.querySelectorAll("div.choices button");
playerChoices.forEach((button) => {
  button.addEventListener('click', (e)=>{
    playerChoice = button.innerHTML.toUpperCase();
    console.log(playerChoice);
    game(playerChoice);
  })
})

/* Order
Attach event listeners to buttons
If clicked, run game
Work out winner
Update score
Update page
*/
