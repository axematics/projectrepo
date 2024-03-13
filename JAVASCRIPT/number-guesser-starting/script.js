let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let x;
    x = Math.floor(Math.random()*9);
    return x;
}

const compareGuesses = (user,cpu,secret) => {
    secret = generateTarget();
    if (user == secret || Math.abs(secret - user) < Math.abs(secret - cpu) || secret - user == secret - cpu) {
        return true;
    } else if (cpu == secret || Math.abs(secret - user) > Math.abs(secret - cpu)) {
        return false;
    } else {
        return 'Error';
    }
}

// console.log(compareGuesses(2,7,9));

const updateScore = winner => {
    if (winner = 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}