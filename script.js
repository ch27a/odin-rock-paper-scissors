function getComputerChoice()
{
    const randNum = Math.random()

    if (randNum < 1 / 3) return "rock";
    else if (randNum > 2 / 3) return "scissors";
    else return "paper";
}

function playRound(event)
{
    const humanChoice = event.target.getAttribute("id");
    const computerChoice = getComputerChoice();
    const result = document.querySelector("#results");
    
    if (humanChoice === computerChoice)
    {
        result.textContent = "It's a tie!"
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        result.textContent ="You lose! Paper beats rock"
        return "computer";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        result.textContent ="You win! Rock beats scissors";
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        result.textContent ="You win! Paper beats rock";
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        result.textContent = "You lose! Scissors beats paper";
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        result.textContent = "You lose! Rock beats scissors";
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        result.textContent ="You win! Scissors beats paper";
        return "human";
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);