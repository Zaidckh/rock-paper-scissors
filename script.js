let number;

let computerChoice;
let humanChoice;

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

//choose between rock paper and scissors//
function getComputerChoice(number) {
  number = Math.floor(Math.random() * 3) + 1;

  if (number === 1) {
    computerChoice = rock;
  } else if (number === 2) {
    computerChoice = paper;
  } else {
    computerChoice = scissors;
  }

  return computerChoice;
}

//get the user choice by using prompt//
function getHumanChoice() {
  humanChoice = prompt("rock, paper or scissors ?");

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock") {
    return rock;
  } else if (humanChoice === "paper") {
    return paper;
  } else if (humanChoice === "scissors") {
    return scissors;
  }

  //prompt until the user choose//
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt("Please, choose betwenn rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
  }

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

//play a single round and decide who is the winner//
function playRound(humanChoice, computerChoice) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (humanSelection == "rock" && computerSelection == "scissors") {
    console.log("You won, rock beat scissors !");
    humanScore++;
  } else if (humanSelection == "rock" && computerSelection == "paper") {
    console.log("You loose, paper beat rock !");
    computerScore++;
  } else if (humanSelection == "rock" && computerSelection == "rock") {
    console.log("Draw, rock and rock");
  }

  if (humanSelection == "paper" && computerSelection == "rock") {
    console.log("You won, paper beat rock !");
    humanScore++;
  } else if (humanSelection == "paper" && computerSelection == "scissors") {
    console.log("You loose, scissors beat paper !");
    computerScore++;
  } else if (humanSelection == "paper" && computerSelection == "paper") {
    console.log("Draw, paper and paper");
  }

  if (humanSelection == "scissors" && computerSelection == "paper") {
    console.log("You won, scissors beat paper !");
    humanScore++;
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
    console.log("You loose, rock beat scissors !");
    computerScore++;
  } else if (humanSelection == "scissors" && computerSelection == "scissors") {
    console.log("Draw, scissors and scissors");
  }

  return humanScore + " " + computerScore;
}

//play 5 time the playRound function//
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  return (
    "Your score is = " +
    humanScore +
    " and the computer score is = " +
    computerScore
  );
}

console.log(playGame());
