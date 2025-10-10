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

let computerChoice = getComputerChoice()
console.log(computerChoice)

function getHumanChoice() {
    let humanChoice = String(prompt("Please enter your choice: ").toLowerCase())
    if (humanChoice === "rock")
        return String("Rock")
    else if (humanChoice === "paper") 
        return String("Paper")
    else (humanChoice === "scissors" || humanchoice === "scissor")
        return String("Scissors")
    }

    let humanChoice = getHumanChoice()
    console.log(humanChoice)

    let humanScore = 0
    let computerScore = 0

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "Paper" && humanChoice === "Rock")
           return String("The Computer won the round.")
        else if (computerChoice === "Scissors" && humanChoice === "Paper")
            return String("The Computer won the round.")
        else if (computerChoice === "Rock" && humanChoice === "Scissors")
            return String("The Computer won the round")
        else if (computerChoice === "Rock" && humanChoice === "Paper")
           return String("You won the round.")
        else if (computerChoice === "Scissors" && humanChoice === "Rock")
            return String("You won the round.")
        else if (computerChoice === "Paper" && humanChoice === "Scissors")
            return String("You won the round")
        else 
            return String("It's a tie!")
    }

    let roundWinner = playRound(computerChoice, humanChoice)
    console.log(roundWinner)