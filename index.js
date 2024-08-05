function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1

    if (computerChoice === 1) {
        computerEl.textContent = "Computer chose Rock"
        console.log("Computer chose Rock")
    } else if (computerChoice === 2) {
        computerEl.textContent = "Computer chose Paper"
        console.log("Computer chose Paper")
    } else {
        computerEl.textContent = "Computer chose Scissors"
        console.log("Computer chose Scissors")
    }

    return computerChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let game = ""

    if (humanChoice === 1 && computerChoice === 3 ||
        humanChoice === 2 && computerChoice === 1 ||
        humanChoice === 3 && computerChoice === 2
    ) {
        resultEl.textContent = "You Win!"
        console.log("You win!")
        humanScore++
    } else if 
       (humanChoice === 1 && computerChoice === 2 ||
        humanChoice === 2 && computerChoice === 3 ||
        humanChoice === 3 && computerChoice === 1
    ) {
        resultEl.textContent = "You Lose!"
        console.log("You lose!")
        computerScore++
    } else {
        resultEl.textContent = "It's a Draw!"
        console.log("It's a draw!")
        computerScore++
        humanScore++
    }
    playerPoint.textContent = `Players score: ${humanScore}`
    computerPoint.textContent = `Computer score: ${computerScore}`

    if (humanScore === 5) {
        gameResult.textContent = "Player has won the game"
        gameEnd()
    } else if (computerScore === 5) {
        gameResult.textContent = "Computer has won the game"
        gameEnd()
    }
}

function gameEnd() {
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true

    newGame.textContent = "Refresh to start a new game!"
}

const newGame = document.getElementById("new-game")
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const resultEl = document.getElementById("results")
const playerEl = document.getElementById("player-choice")
const computerEl = document.getElementById("computer-choice")
const gameResult = document.getElementById("game-result")
let playerPoint = document.getElementById("player-score")
let computerPoint = document.getElementById("computer-score")

rockBtn.addEventListener("click", function() {
    let humanChoice = 1
    let computerChoice = getComputerChoice()
    playerEl.textContent = "Player chose Rock"
    console.log("Player chose rock")
    playRound(humanChoice, computerChoice)
})

paperBtn.addEventListener("click", function() {
    let humanChoice = 2
    let computerChoice = getComputerChoice()
    playerEl.textContent = "Player chose Paper"
    console.log("Player chose paper")
    playRound(humanChoice, computerChoice)
})

scissorsBtn.addEventListener("click", function() {
    let humanChoice = 3
    let computerChoice = getComputerChoice()
    playerEl.textContent = "Player chose Scissors"
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