let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

// function to randomize the selection
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// selects random choice out of 3 possible alternatives
function getComputerChoice() {
    let compChoice = getRandomInt(3);
    switch(compChoice) {
        case 0:
            return choice1;
        case 1:
            return choice2;
        case 2:
            return choice3;
    }
}

function getHumanChoice() {
    let playerChoice = prompt("MAKE YOUR CHOICE");
    return playerChoice;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanString = humanChoice.toLowerCase();
        
        switch(true) {
            case(humanString == computerChoice):
                console.log("YOU TIED WITH THE DEVICE");
                return;
            case(humanString == "rock" && computerChoice == "paper"):
                console.log("YOU LOST\nSTONE IS ENCLOSED BY THE SHEET");
                // increase the computers's score if it wins
                ++computerScore;
                return;
            case(humanString == "paper" && computerChoice == "rock"):
                console.log("YOU WON\nSHEET CONTAINS THE STONE");
                ++humanScore;
                return;    
            case(humanString == "scissors" && computerChoice == "rock"):
                console.log("YOU LOST\nSHEARS IS ANNIHILATED BY THE STONE");
                ++computerScore;
                return;
            case(humanString == "rock" && computerChoice == "scissors"):
                console.log("YOU WON\nSTONE ERADICATES THE SHEARS")    
                ++humanScore;
                return;
            case(humanString == "paper" && computerChoice == "scissors"):
                console.log("YOU LOST\nSHEET IS SLICED BY THE SHEARS")
                ++computerScore;
                return;
            case(humanstring == "scissors" && computerChoice == "paper"):
                console.log("YOU WON\nSHEAR CUTS DOWN THE SHEET")
                ++humanScore;
                return;
        }
    }

    for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    //console.log(humanSelection);
    //console.log(computerSelection);
    playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log("CONGRATULATIONS\nYOU HAVE WON THIS TRIVIAL MATCH");
    }
    else if(computerScore > humanScore){
        console.log("YOU HAVE SUCCUMBED TO THE DEVICE'S WILL");
    }
    else if (computerScore == humanScore){
        console.log("YOU AND THE DEVICE ARE EQUALLY MATCHED");
    }
}

playGame();