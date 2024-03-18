const reverseArray = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.unshift(array[i]);
    }
    return newArray;
  }
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence))
  //Prints [ 'This', 'will', 'all', 'make', 'sense.' ]
  