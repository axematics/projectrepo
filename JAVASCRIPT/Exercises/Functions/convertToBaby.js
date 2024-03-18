const convertToBaby = array => {
    let babyArray = [];
    for (let i = 0; i < array.length; i++) {
      babyArray.push('baby ' + array[i]);
    }
    return babyArray;
  }
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  /*Prints: [ 'baby panda',
    'baby turtle',
    'baby giraffe',
    'baby hippo',
    'baby sloth',
    'baby human' ]*/
  