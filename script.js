function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        console.log(`Congratulations!! You WIN. ${playerSelection} beats ${computerSelection}`);
        return 'player';
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 'computer';
    } else {
        console.log("It's a tie");
        return 'tie';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 'player') {
            playerScore++;
        } else if (roundResult === 'computer') {
            computerScore++;
        }
    }

    // Display the final results
    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Call the game function to start the best-of-five game
game();
