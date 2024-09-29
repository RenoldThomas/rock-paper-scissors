let humanScore = 0;
let computerScore = 0;

const score = document.querySelector("#score");
const divElement = document.querySelector("div");
const winner = document.createElement("h2");

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

function checkWinner(humanScore, computerScore) {
    if (humanScore === 5 && computerScore < 5) {
        const winner = document.createElement("h2");
        winner.textContent = "You Win! You beat the computer!";
        divElement.appendChild(winner);
    }
    else if (computerScore === 5 && humanScore < 5) {
        const winner = document.createElement("h2");
        winner.textContent = "You Lose. Try again!";
        divElement.appendChild(winner);
    }
    else {
        return "";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 && computerScore < 5) {
        winner.textContent = "You Win! You beat the computer!";
        divElement.appendChild(winner);
    } else if (computerScore === 5 && humanScore < 5) {
        winner.textContent = "You Lose. Try again!";
        divElement.appendChild(winner);
    }
    else {
        if (humanChoice === computerChoice) {
            divElement.innerHTML = "You tied!";
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            divElement.innerHTML = "You Lose! Paper beats Rock.";
            computerScore += 1;
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            divElement.innerHTML = "You Win! Rock beats Scissors.";
            humanScore += 1;
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            divElement.innerHTML = "You Win! Paper beats Rock.";
            humanScore += 1;
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            divElement.innerHTML = "You Lose! Scissors beats Paper.";
            computerScore += 1;
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            divElement.innerHTML = "You Win! Scissors beats Paper.";
            humanScore += 1;
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            divElement.innerHTML = "You lose! Rock beats Scissors.";
            computerScore += 1;
            score.innerHTML = humanScore + " - " + computerScore;
            divElement.appendChild(score);
        } else {
            alert("Did not give valid input");
        }
    }
}

const options = document.querySelectorAll("button");

options.forEach((button) => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(button.textContent.toLowerCase(), computerChoice);
    })
})