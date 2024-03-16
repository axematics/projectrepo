const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      } else {
        console.log('Wrong meal');
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (typeof this._meal === 'string' && typeof this._price === 'number') {
        return `Today's special is ${this._meal} for only \$${this._price}!!! Come and eat!`;
      } else {
        return 'Meal or price was not set properly. Please fix values.';
      }
    }
  }
  menu.meal = 'spagheite bolognaiseds';
  menu.price = 34;
  console.log(menu._meal);
  console.log(menu._price);
  console.log(menu.todaysSpecial);
  
  const dish = (dishName, dishPrice) => {
    return {
      dishName,
      dishPrice
    }
  }
  
  let special1 = dish('Sushi',2.59);
  let special2 = dish('Wakamesalat', 1.99);
  let special3 = dish('Schweinebraten', 9.99);
  let special4 = dish('Focaccia', 3.99);
  let special5 = dish('Roulade', 6.49);
  
  const randomSpecials = [special1,special2,special3,special4,special5];
  //console.log(randomSpecials);
  
  const getSpecial = () => {
    let i = Math.floor(Math.random()*5);
    console.log(randomSpecials[i]);
  }
  
  getSpecial();