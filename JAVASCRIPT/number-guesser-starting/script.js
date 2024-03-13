let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let x;
    x = Math.floor(Math.random()*9);
    return x;
}

const compareGuesses = (user,cpu,target) => {
    target = generateTarget();
    if (user == target || Math.abs(target - user) < Math.abs(target - cpu) || target - user == target - cpu) {
        return true;
    } else if (cpu == target || Math.abs(target - user) > Math.abs(target - cpu)) {
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