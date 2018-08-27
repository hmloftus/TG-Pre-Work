const input = 'turpentine and turtles';
let vowels =['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex=0; inputIndex < input.length; inputIndex++) {
  for (let stringIndex=0; stringIndex < vowels.length; stringIndex++) {
  if (input[inputIndex] === vowels[stringIndex]){
    resultArray.push(input[inputIndex]);
    }
  }
  if (input[inputIndex]==='e' || input[inputIndex]==='u'){
    resultArray.push(input[inputIndex]);
  }
 
}

console.log(resultArray);
console.log(resultArray.join('').toUpperCase());

