userInput = 'rock';

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput = 'rock' || 'paper' || 'scissors'){
    return userInput;
  } else if (userInput === 'bomb') {
     console.log('You win!');
  }
  else {
    console.log('Error!');
  }
};

console.log(getUserChoice('Paper')); 

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
  case 0:
    return ‘rock’;
  case 1:
    return ‘paper’;
  case 2:
    return ‘scissors’;
}
}

const determineWinner = (userChoice , computerChoice) =>{
  if ( userChoice === computerChoice) {
	return “It’s a tie!”
}
	if (userChoice === ‘rock’) {
	if (computerChoice === ‘paper’)
		return ‘You Loose!’;
}
if (userChoice === ‘paper’) {
if (computerChoice === ‘scissors’)
return ‘You Loose!’;
}
if (userChoice === ‘scissors’) {
if (computerChoice === ‘rock’)
return ‘You Loose!’;
} else {
return ‘You Won!’;
}
}
const playGame = () =>{
const userChoice = getUserChoice(‘rock’);

const computerChoice = getComputerChoice();
console.log('You threw: ’ + userChoice);
console.log('The computer threw: ’ + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
}

