const greetAliens = array => {
    for (let i = 0; i < array.length; i++) {
      console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
    }
  }
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  