const justCoolStuff = (arr1,arr2) => {
    let newList = arr1.filter(word => {
      return arr2.includes(word);
    });
    return newList;
  };
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff));
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]