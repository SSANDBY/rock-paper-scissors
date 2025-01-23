function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function getHumanChoice (){
    let humanChoice = prompt('Enter your choice: rock, paper or scissors');
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;
function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        return 'It is a tie!';
    }
    if (humanChoice === 'rock'){
        if (computerChoice === 'paper'){
            computerScore++;
            return 'Computer wins!, paper beats rock';
        } else {
            humanScore++;
            return 'You win!, rock beats scissors';
        }
    }
    if (humanChoice === 'paper'){
        if (computerChoice === 'scissors'){
            computerScore++;
            return 'Computer wins!, scissors beats paper';
        } else {
            humanScore++;
            return 'You win!, paper beats rock';
        }
    }
    if (humanChoice === 'scissors'){
        if (computerChoice === 'rock'){
            computerScore++;
            return 'Computer wins!, rock beats scissors';
        } else {
            humanScore++;
            return 'You win!, scissors beats paper';
        }
    }
}
function playGame (){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    if (humanScore > computerScore){
        console.log('You win the game!');
    } else if (humanScore === computerScore){
        console.log('It is a tie!');
    }
    else {
        console.log('Computer wins the game!');
    }
}
playGame();
