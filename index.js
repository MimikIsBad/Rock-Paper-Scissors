function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    console.log(computerChoice)
}

getComputerChoice()

let humanChoice = window.prompt("Rock, Paper, or Scissors?")

function getHumanChoice() {
    choice = ""

    if (humanChoice === "rock") {
        console.log("Player chose Rock")
        choice = 1
    } else if (humanChoice === "paper") {
        console.log("Player chose Paper")
        choice = 2
    } else if (humanChoice === "scissors") {
        console.log("Player chose Scissors")
        choice = 3
    } else {
        console.log("Please pick a choice")
    }
}

getHumanChoice()

let humanScore = 0
let computerScore = 0