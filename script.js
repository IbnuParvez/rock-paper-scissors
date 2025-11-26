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
  let choice = prompt("What is your choice? (rock, paper, or scissors)");
  return choice ? choice.toLowerCase() : "";
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Normalize choices to lowercase for case-insensitive comparison
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    // Check for draw using normalized strings to avoid case sensitivity issues
    if (human === computer) {
      console.log("Aa!.. You guys drew it out");
    } else if (
      // Win conditions: human wins when their choice beats computer's
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
    ) {
      console.log("You win boss!!!");
      humanScore++; // Increment human score on win
    } else {
      console.log("you lost");
      computerScore++; // Increment computer score on loss
    }
  }

  // Play 5 rounds for a complete game
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Display final scores after all rounds
  console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();