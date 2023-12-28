let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play a round and update scores
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        playerScore++;
        return 'Congratulations!! You WIN.';
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore++;
        return 'You Lose!';
    } else {
        return "It's a tie";
    }
}

// Function to update scores and check for the winner
function updateScore(roundResult) {
    const playerPoints = document.getElementById('player-points');
    const computerPoints = document.getElementById('computer-points');

    playerPoints.textContent = `Player Points: ${playerScore}`;
    computerPoints.textContent = `Computer Points: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

// Function to end the game and display the winner
function endGame() {
    const resultsDiv = document.getElementById('results');

    if (playerScore > computerScore) {
        resultsDiv.textContent = 'You win the game!';
    } else if (playerScore < computerScore) {
        resultsDiv.textContent = 'You lose the game!';
    } else {
        resultsDiv.textContent = "The game is a tie!";
    }

    // Optional: You can reset the scores here if you want to play another round
    // playerScore = 0;
    // computerScore = 0;
}

// Function to play the game when a button is clicked
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    // Use DOM manipulation to update the results div
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = roundResult;

    // Update scores and check for the winner
    updateScore(roundResult);
}

// Get HTML elements for buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
// Add onClick methods to buttons
rockButton.addEventListener('click', function () {
    playGame('rock');
});

paperButton.addEventListener('click', function () {
    playGame('paper');
});

scissorsButton.addEventListener('click', function () {
    playGame('scissors');
});