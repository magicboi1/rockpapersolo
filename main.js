const choices = ["rock, paper, scissors"];

function playerChoice() {
  let input = prompt("Please type Rock, Paper, or Scissors");
  input = input.toLowerCase;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "Tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}



function game() {
    const player = playerChoice();
    const computer = computerChoice();
    function checkWinner(player, computer);
}


game();


