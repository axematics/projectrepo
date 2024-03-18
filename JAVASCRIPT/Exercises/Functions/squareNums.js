const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => {
  let results = arr.map(number => {
    return number**2;
  })
  return results;
}

console.log(squareNums(numbers));