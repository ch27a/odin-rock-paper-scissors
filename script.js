function getComputerChoice()
{
    randNum = Math.random()

    if (randNum < 1 / 3) return "rock";
    else if (randNum > 2 / 3) return "scissors";
    else return "paper";
}

function getHumanChoice()
{
    choice = window.prompt("Choose: ").toLowerCase();
    return choice;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! Paper beats Rock");
        return "computer";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock beats Scissors");
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! Paper beats rock");
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Scissors beats paper");
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! Rock beats scissors");
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors beats paper");
        return "human";
    }
    else
    {
        console.log("Your input was not valid")
    }
}

playGame();