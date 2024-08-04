function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1

    if (computerChoice === 1) {
        console.log("Computer chose Rock")
    } else if (computerChoice === 2) {
        console.log("Computer chose Paper")
    } else {
        console.log("Computer chose Scissors")
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors?")
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === "rock") {
        console.log("Player chose Rock")
        humanChoice = 1
        return humanChoice
    } else if (humanChoice === "paper") {
        console.log("Player chose Paper")
        humanChoice = 2
        return humanChoice
    } else if (humanChoice === "scissors") {
        console.log("Player chose Scissors")
        humanChoice = 3
        return humanChoice
    } else {
        console.log("Please pick a choice")
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let game = ""

    if (humanChoice === 1 && computerChoice === 3 ||
        humanChoice === 2 && computerChoice === 1 ||
        humanChoice === 3 && computerChoice === 2
    ) {
        console.log("You win!")
        humanScore++
    } else if 
       (humanChoice === 1 && computerChoice === 2 ||
        humanChoice === 2 && computerChoice === 3 ||
        humanChoice === 3 && computerChoice === 1
    ) {
        console.log("You lose!")
        computerScore++
    } else {
        console.log("It's a draw!")
        computerScore++
        humanScore++
    }
}

const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

rockBtn.addEventListener("click", function() {
    let humanChoice = 1
    let computerChoice = getComputerChoice()
    console.log("Player chose rock")
    playRound(humanChoice, computerChoice)
})

paperBtn.addEventListener("click", function() {
    let humanChoice = 2
    let computerChoice = getComputerChoice()
    console.log("Player chose paper")
    playRound(humanChoice, computerChoice)
})

scissorsBtn.addEventListener("click", function() {
    let humanChoice = 3
    let computerChoice = getComputerChoice()
    console.log("Player chose scissors")
    playRound(humanChoice, computerChoice)
})


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice()
//         const computerSelection = getComputerChoice()
//         playRound(humanSelection, computerSelection)
//         console.log(`Player score: ${humanScore}`)
//         console.log(`Computer score: ${computerScore}`)
//     }
// }

// playGame()