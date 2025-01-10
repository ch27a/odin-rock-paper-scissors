function getComputerChoice()
{
    randNum = Math.random()

    if (randNum < 1 / 3) return "rock";
    else if (randNum > 2 / 3) return "scissors";
    else return "paper";
}
