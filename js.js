let humanScore = 0;
let computerScore = 0;

const scoreDisplay = document.querySelector("#score");
const resultDisplay = document.querySelector("#result");
const finalDisplay = document.querySelector("#final");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore() {
  scoreDisplay.textContent = `You: ${humanScore} — Computer: ${computerScore}`;
}

function displayResult(message) {
  resultDisplay.textContent = message;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    finalDisplay.textContent = humanScore === 5
      ? "🎉 You win the game!"
      : "💀 You lose. Try again!";
    setTimeout(() => {
      humanScore = 0;
      computerScore = 0;
      updateScore();
      finalDisplay.textContent = "";
    }, 3000);
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    displayResult(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  updateScore();
  checkWinner();
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
