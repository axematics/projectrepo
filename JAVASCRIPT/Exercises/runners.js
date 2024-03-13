let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = false;

let runnerAge = 18;

if (runnerAge > 18 && earlyReg) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg) {
  console.log(`You are ${runnerAge} years old and you registered early, so your race begins at 9:30 AM. Your racenumber is ${raceNumber}.`);
} else if (runnerAge > 18 && !earlyReg) {
  console.log(`You are ${runnerAge} years old but did not register early. Your start time is 11:00 AM, Your racenumber is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You are ${runnerAge} years old so your race begins at 12:30 PM. Your racenumber is ${raceNumber}.`);
} else {
  console.log('Please visit the registration desk.');
}

// console.log(raceNumber);