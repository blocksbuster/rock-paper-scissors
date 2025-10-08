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
        return String("Scissor")
    }

    }


    // function computerChoice() {
    //     if (computerChoice = 0) {
    //         let computerChoice = "Rock"
    //         return computerChoice
    //     }
    //     else if (computerChoice = 1) {
    //         let computerChoice = "Paper"
    //         return computerChoice
    //     }
    //     else (computerChoice = 2) {
    //         let computerChoice = "Scissor"
    //         return computerChoice
    //     }


    

let random = getComputerChoice()
console.log(random)