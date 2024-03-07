// today's forecast:
const kelvin = 400;
// converting to celsius from kelvin:
let celsius = kelvin - 273;
// converting to fahrenheit from celsius:
let fahrenheit = celsius*(9/5)+32;
// rounding down fahrenheit value:
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${celsius} degrees Celsius`);
