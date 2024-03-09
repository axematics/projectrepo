function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 0;
        break;
      case 'friday':
        return 10;
        break;
      case 'saturday':
        return 4;
        break;
      case 'sunday':
        return 12;
        break;
    }
  }
  
  // console.log(getSleepHours('sunday'))
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  //console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  //console.log(getIdealSleepHours());
  
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You have the perfect amount of sleep. ' + `You slept ${actualSleepHours} hours long, which is exactly how long you want to sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than you need. ' + `You are ${actualSleepHours - idealSleepHours} hours over the recommended amount`);
    } else {
      console.log('You need some rest. ' + `You need ${idealSleepHours - actualSleepHours} more hours of sleep.`);
    }
  }
  
  calculateSleepDebt();
  
  
  
  
  