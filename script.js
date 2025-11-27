let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    // Normalize choices to lowercase for case-insensitive comparison
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    let message = "";

    // Check for draw using normalized strings to avoid case sensitivity issues
    if (human === computer) {
      message = "Aa!.. You guys drew it out";
    } else if (
      // Win conditions: human wins when their choice beats computer's
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
    ) {
      message = "You win boss!!!";
      humanScore++; // Increment human score on win
    } else {
      message = "you lost";
      computerScore++; // Increment computer score on loss
    }

    message += ` Scores: Human ${humanScore}, Computer ${computerScore}`;

    // Check if someone reached 5
    if (humanScore === 5) {
        message += " Human wins the game!";
    } else if (computerScore === 5) {
        message += " Computer wins the game!";
    }

    document.getElementById("result").textContent = message;
}

function getHumanChoice() {
  document.getElementById("Rockbtn").addEventListener("click", () => playRound("rock", getComputerChoice()));
  document.getElementById("Paperbtn").addEventListener("click", () => playRound("paper", getComputerChoice()));
  document.getElementById("Scissorsbtn").addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

function playGame(){
  // Play 5 rounds for a complete game
  //for (let round = 1; round <= 5; round++) {
    //console.log(`Round ${round}:`);
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();
  //playRound(humanSelection, computerSelection);
  //}

  // Display final scores after all rounds
  //if(humanScore === 5 || computerScore === 5){document.write(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`)
  //} else {
  //  document.write("Not yet five")
  //}
}

getHumanChoice();
//playGame();