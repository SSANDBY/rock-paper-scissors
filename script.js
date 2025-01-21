let answer = prompt("Rock, Paper or Scissors?","");
answer = answer.toLowerCase();
let computerChoice = Math.ceil(Math.random()*3);
if (computerChoice == 1) {
    computerChoice = "rock";
    }
else if (computerChoice == 2) {
    computerChoice = "paper";
    }
else { computerChoice = "scissors";
    }
alert("Computer: " + computerChoice);
if (answer == computerChoice) {
    alert("It's a tie!");
    }
else if (answer == "rock") {
    if (computerChoice == "scissors") {
        alert("You win!");
        }
    else {
        alert("You lose!");
        }
    }
else if (answer == "paper") {
    if (computerChoice == "rock") {
        alert("You win!");
        }
    else {
        alert("You lose!");
        }
    }
else if(answer == "scissors") {
    if (computerChoice == "paper") {
        alert("You win!");
        }
    else {
        alert("You lose!");
        }
    }


