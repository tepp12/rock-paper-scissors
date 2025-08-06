let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

let playerMove = "";

const container = document.querySelector("#container");
const scores = document.querySelector("#scores");

const rockButton = document.createElement("button");
rockButton.textContent = "STONE";
const paperButton = document.createElement("button");
paperButton.textContent = "SHEET";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SHEAR";

let resultDisplay = document.createElement("div");

let humanScore = 0;
let computerScore = 0;

let playerScoreDiv = document.createElement("div");
playerScoreDiv.textContent = `HUMAN'S SCORE: ${humanScore}`;
let computerScoreDiv = document.createElement("div");
computerScoreDiv.textContent = `MACHINE'S SCORE: ${computerScore}`;

container.appendChild(resultDisplay);
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

scores.appendChild(playerScoreDiv);
scores.appendChild(computerScoreDiv);

const buttons = document.querySelectorAll("button");

// function to randomize the selection
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// selects random choice out of 3 possible alternatives
function getComputerChoice() {
  let compChoice = getRandomInt(3);
  switch (compChoice) {
    case 0:
      return choice1;
    case 1:
      return choice2;
    case 2:
      return choice3;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (true) {
      case button.textContent == "STONE":
        playerMove = choice1;
        playGame();
        return;
      case button.textContent == "SHEAR":
        playerMove = choice2;
        playGame();
        return;
      case button.textContent == "SHEET":
        playerMove = choice3;
        playGame();
        return;
    }
  });
});

// function getHumanChoice() {
//     let playerChoice = prompt("MAKE YOUR CHOICE");
//     return playerChoice;
// }

function playGame() {
  if (humanScore < 5 && computerScore < 5) {
    function playRound(humanChoice, computerChoice) {
      switch (true) {
        case humanChoice === computerChoice:
          resultDisplay.textContent = "YOU TIED WITH THE DEVICE";
          console.log("tied");
          return;
        case humanChoice == "rock" && computerChoice == "paper":
          resultDisplay.textContent =
            "YOU LOST, STONE IS ENCLOSED BY THE SHEET";
          console.log("player lost");
          ++computerScore;
          computerScoreDiv.textContent = `MACHINE'S SCORE: ${computerScore}`;
          return;
        case humanChoice == "paper" && computerChoice == "rock":
          resultDisplay.textContent = "YOU WON, SHEET CONTAINS THE STONE";
          console.log("player won");
          ++humanScore;
          playerScoreDiv.textContent = `HUMAN'S SCORE: ${humanScore}`;
          return;
        case humanChoice == "scissors" && computerChoice == "rock":
          console.log("player won");
          resultDisplay.textContent =
            "YOU LOST, SHEAR IS ANNIHILATED BY THE STONE";
          ++computerScore;
          computerScoreDiv.textContent = `MACHINE'S SCORE: ${computerScore}`;
          return;
        case humanChoice == "rock" && computerChoice == "scissors":
          console.log("player won");
          resultDisplay.textContent = "YOU WON, STONE ERADICATES THE SHEAR";
          ++humanScore;
          playerScoreDiv.textContent = `HUMAN'S SCORE: ${humanScore}`;
          return;
        case humanChoice == "paper" && computerChoice == "scissors":
          console.log("player lost");
          resultDisplay.textContent = "YOU LOST, SHEET IS SLICED BY THE SHEAR";
          ++computerScore;
          computerScoreDiv.textContent = `MACHINE'S SCORE: ${computerScore}`;
          return;
        case humanChoice == "scissors" && computerChoice == "paper":
          console.log("player won");
          resultDisplay.textContent = "YOU WON, SHEAR CUTS DOWN THE SHEET";
          ++humanScore;
          playerScoreDiv.textContent = `HUMAN'S SCORE: ${humanScore}`;
          return;
      }
    }

    // for (i = 0; i < 5; i++) {;
    const humanSelection = playerMove;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    {
      if (humanScore >= 5) {
        resultDisplay.textContent =
          "CONGRATULATIONS\nYOU HAVE WON THIS TRIVIAL MATCH";
        console.log("CONGRATULATIONS\nYOU HAVE WON THIS TRIVIAL MATCH");
      } else if (computerScore >= 5) {
        resultDisplay.textContent = "YOU HAVE SUCCUMBED TO THE DEVICE'S WILL";
        console.log("YOU HAVE SUCCUMBED TO THE DEVICE'S WILL");
      }
    }
  } else {
    resultDisplay.textContent =
      "THE GAME HAS CONCLUDED, IT WILL NEVER BE PLAYED AGAIN";
  }
}
