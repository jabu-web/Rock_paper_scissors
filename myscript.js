function computerPlay(items) {
  var items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

var userScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    return "Your score: " + userScore + " Computer score: " + computerScore;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    userScore += 1;
    return "Your score: " + userScore + " Computer score: " + computerScore;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    userScore += 1;
    return "Your score: " + userScore + " Computer score: " + computerScore;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore += 1;
    return "Your score: " + userScore + " Computer score: " + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    userScore += 1;
    return "Your score: " + userScore + " Computer score: " + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    return "Your score: " + userScore + " Computer score: " + computerScore;
  } else {
    return "Draw!";
  }
}

document.getElementById("rock").addEventListener("click", user);
document.getElementById("paper").addEventListener("click", user);
document.getElementById("scissors").addEventListener("click", user);

function user() {
  var playerSelection = this.id;
  const computerSelection = computerPlay();

  playRound(playerSelection, computerSelection);
  console.log("You selected " + playerSelection + ".");
  console.log("Com selected " + computerSelection + ".");

  if (userScore === 5) {
    userScore = 0;
    computerScore = 0;
    document.getElementById("mylog").textContent =
      "You reached 5 points first. You win! Congratulations!";
  } else if (computerScore === 5) {
    userScore = 0;
    computerScore = 0;
    document.getElementById("mylog").textContent =
      "Computer reached 5 points first! You Lose! Better luck next time.";
  } else {
    document.getElementById("mylog").textContent =
      "Your score: " + userScore + " - Computer score: " + computerScore;
  }
}
