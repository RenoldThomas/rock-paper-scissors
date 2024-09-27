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
    return answer.toLowerCase();
}

console.log(getHumanChoice());