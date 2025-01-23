function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function getHumanChoice (){
    let humanChoice = prompt('Enter your choice: rock, paper or scissors');
    return humanChoice;
}
console.log(getHumanChoice());
