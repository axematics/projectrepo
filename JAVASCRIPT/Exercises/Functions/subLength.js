// Write function below
/*
- count how many times query is found
  - if less than 2 or more than 2, return 0
- indexOf() to first occurrence of letter
- splice before resulting index
- lastIndexOf() to last occurrence of letter
- return .length on resulting string
*/

const countThis = (arr,thisLetter) => {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === thisLetter) {
        counter++
      }
    }
    return counter;
  }
  
  const subLength = (word,letter) => {
    let howMany = countThis(word,letter);
    if (howMany > 2 || howMany < 2) {
      return 0;
    } else {
      let pos1 = word.indexOf(letter);
      let pos2 = word.lastIndexOf(letter);
      return pos2-pos1+1;
    }
  }
  
  console.log(subLength('accelerate', 'a'));
  
  //Prints: 8 (# of characters in 'accelerate' between 'a', inclusive)