let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("Type in one: rock, paper, or scissors");
    return answer.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You tied!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock.");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors.");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock.");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper.");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper.");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore += 1;
    } else {
        alert("Did not give valid input");
    }

}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You Won! You beat the computer ${humanScore} - ${computerScore}!`);
    }
    else if (humanScore === computerScore) {
        console.log(`You tied! The score was ${humanScore} - ${computerScore}.`);
    }
    else {
        console.log(`You lost ${humanScore} - ${computerScore}. Try again next time.`);
    }

}

playGame();