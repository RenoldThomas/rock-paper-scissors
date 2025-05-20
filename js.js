/**
 * Rock Paper Scissors Game
 * 
 * A simple implementation of the classic Rock Paper Scissors game
 * where a player competes against the computer. The game is played
 * until either the player or computer reaches 5 points.
 */

// Initialize game scores
let humanScore = 0;
let computerScore = 0;

// Get DOM elements for updating the UI
const scoreDisplay = document.querySelector("#score");
const resultDisplay = document.querySelector("#result");
const finalDisplay = document.querySelector("#final");

/**
 * Generates a random choice for the computer player
 * @returns {string} - Computer's choice (rock, paper, or scissors)
 */
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Updates the score display on the UI
 */
function updateScore() {
  scoreDisplay.textContent = `You: ${humanScore} — Computer: ${computerScore}`;
}

/**
 * Displays the result of the current round
 * @param {string} message - The result message to display
 */
function displayResult(message) {
  resultDisplay.textContent = message;
}

/**
 * Checks if either player has reached 5 points
 * If a winner is found, displays the game result and resets after a delay
 */
function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    // Display appropriate message based on who won
    finalDisplay.textContent = humanScore === 5
      ? "🎉 You win the game!"
      : "💀 You lose. Try again!";
    
    // Reset the game after a 3-second delay
    setTimeout(() => {
      humanScore = 0;
      computerScore = 0;
      updateScore();
      finalDisplay.textContent = "";
    }, 3000);
  }
}

/**
 * Plays a single round of Rock Paper Scissors
 * @param {string} humanChoice - The human player's choice
 * @param {string} computerChoice - The computer player's choice
 */
function playRound(humanChoice, computerChoice) {
  // Check for a tie
  if (humanChoice === computerChoice) {
    displayResult(`It's a tie! Both chose ${humanChoice}`);
  } 
  // Check if human wins
  else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } 
  // Otherwise, computer wins
  else {
    displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  // Update the score display and check for a game winner
  updateScore();
  checkWinner();
}

// Event listeners for the game buttons
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});