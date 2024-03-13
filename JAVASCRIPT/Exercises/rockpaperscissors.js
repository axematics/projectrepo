console.log('hi');
//userInput = userInput.toLowerCase();

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error');
  }
}

//console.log(getUserChoice('fuck'));

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie.';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won';
    } else {
      return 'User won';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won';
    } else {
      return 'User won';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won';
    } else {
      return 'User won';
    }
  } else if (userChoice === 'bomb') {
    return 'User is champ';
  }
}

//console.log(determineWinner('paper', 'paper'));

function playGame() {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();






