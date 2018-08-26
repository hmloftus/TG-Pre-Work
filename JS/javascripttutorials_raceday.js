let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let age = 45;

if (earlyRegister && age>18) {
  raceNumber += 1000;
}

if (earlyRegister && age>18) {
  console.log(`You race at 9:30 and your # is ${raceNumber}`);
} 
else if (!early && age>18) {
   console.log(`You race at 11am and your # is ${raceNumber}`);
} 
else if (age<18) {
   console.log(`You race at 12:30 and your # is ${raceNumber}`);
}
else {
  console.log('See Registration');
}