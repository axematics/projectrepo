// Write your function here:
const currentYear = 2024;
const howOld = (age,year) => {
  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;
  if (yearDifference > 0) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${yearDifference*-1} years before you were born`;
  } else if (yearDifference < 0 && newAge >= 0) {
    return `You were ${newAge} in the year ${year}`;
  }
}

console.log(howOld(31,1870));

// Once your function is written, write function calls to test your code!
