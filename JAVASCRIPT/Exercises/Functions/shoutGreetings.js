const shoutGreetings = arr => {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
      newArr.push(arr[i].toUpperCase() + '!');
    }
    return newArr;
  }
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Prints: [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  

