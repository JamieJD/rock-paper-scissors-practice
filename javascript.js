const choices = ["rock","paper","scissors"]

function game() {
 for(let i = 0; i < 5; i++) { 
    playRound();
 }
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  console.log(computerSelection);
  const winner = checkWinner(playerSelection,computerSelection);
  console.log(winner);
}

function playerChoice() {
  let input = prompt("Type rock, paper, or scissors")
  while(input == null) {
    input = prompt("Type rock, paper or scissors")
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  while (check == false) {
    input = prompt(
        "Type rock, paper or scissors. Check for spelling errors (capitalisation doesn't matter)."
        );
  while (input == null) {
    input = prompt("Type rock, paper or scissors");
  }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP,choiceC){
    console.log(choiceP,choiceC);
    if (choiceP === choiceC){
        return "You tied";
    } else if (
      (choiceP === "rock" && choiceC === "scissors") ||
      (choiceP === "scissors" && choiceC === "paper") ||
      (choiceP === "paper" && choiceC === "rock")
    ) {
        return "You won";
    } else {
        return "You lost";
    }
}

game();