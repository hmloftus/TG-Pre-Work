//variable assigned to kelvin is constant
const kelvin = 0;

//variable assigned to celsius is constant 
const celsius = kelvin - 273;

//variable assigned to fahn. is changeable
let fahrenheit = celsius *(9/5) * 32;

//rounds fahrenheit to round number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);