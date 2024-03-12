// Write your function here:
const tipCalculator = (rating, total) => {
    switch (rating) {
      case 'bad':
        return total*0.05;
        break;
      case 'ok':
        return total*0.15;
        break;
      case 'good':
        return total*0.2;
        break;
      case 'excellent':
        return total*0.3;
        break;
      default:
        return total*0.18;
        break;
    }
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  
  console.log(tipCalculator('excellent',700)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
