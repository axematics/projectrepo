const findMyKeys = arr => {
    return arr.findIndex(key => {
      return key === 'keys';
    });
  }
  
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))
  // Should print 4