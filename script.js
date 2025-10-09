function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let randomNumber = getRandomInt(3); 
    
    if (randomNumber === 0) {
        return String("Rock")
    }
    else if (randomNumber === 1) {
        return String("Paper")
    }
    else (randomNumber === 2) ;{
        return String("Scissors")
    }

    }

let randomPC = getComputerChoice()
console.log(randomPC)

function getHumanChoice() {
    let humanchoice = String(prompt("Please enter your choice: "))
    if (humanchoice === "Rock" || humanchoice === "rock")
        return String("You've chosen rock")
    else if (humanchoice === "Paper" || humanchoice === "paper") 
        return String("You've chosen Paper")
    else (humanchoice === "Scissors" || humanchoice === "scissors" || humanchoice === "Scissor" || humanchoice === "scissor")
        return String("You've chosen Scissors")
}

let randomHuman = getHumanChoice()
console.log(randomHuman)

let humanScore = 0
let computerScore = 0