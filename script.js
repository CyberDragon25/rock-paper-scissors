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
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log("It's a tie");
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
