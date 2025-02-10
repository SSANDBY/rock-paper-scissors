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

let rockchoice = document.querySelector('#rock');
let paperchoice = document.querySelector('#paper');
let scissorschoice = document.querySelector('#scissors');
let winResult = document.querySelector('#winResult');
let scoreResult = document.querySelector('#scoreResult');


rockchoice.addEventListener('click', () => {
    let gameResult = playRound('rock', getComputerChoice());
    winResult.textContent = gameResult;
    scoreResult.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5){
        winResult.textContent = 'Human wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        winResult.textContent = 'Computer wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
});
paperchoice.addEventListener('click', () => {
    let gameResult = playRound('paper', getComputerChoice());
    winResult.textContent = gameResult;
    scoreResult.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5){
        winResult.textContent = 'Human wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        winResult.textContent = 'Computer wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
});
scissorschoice.addEventListener('click', () => {
    let gameResult = playRound('scissors', getComputerChoice());
    winResult.textContent = gameResult;
    scoreResult.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5){
        winResult.textContent = 'Human wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        winResult.textContent = 'Computer wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
}); 