function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
  let choice = prompt("What is your choice?");
  return choice;
}

function playGame(){
  
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("Aa!.. You guys drew it out");
  } else if (human === "Rock" && computer === "Scissors") || (human === "Scissors" && computer === "Paper") || (human === "Paper" && computer === "Rock") {
    console.log("You win boss!!!");
  } else {
    console.log("you lost");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}

playGame();