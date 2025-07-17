console.log("hello world")

let choice1 = "rock"
let choice2 = "paper"
let choice3 = "scissors"

// function to randomize the selection
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// selects random choice out of 3 possible alternatives
function getComputerChoice() {
    let compChoice = getRandomInt(3)
    switch(compChoice) {
        case 0:
            return choice1;
        case 1:
            return choice2;
        case 2:
            return choice3;    
    }
}

console.log(getComputerChoice())

