"use strict";

function calculateDogAge(fictional) {
  let ages = 7;
  let agesB = 14;
  let agesC = 21;
  // TODO complete this function
  if (ages === 7) {
    return `Your doggie is ${ages} years old in dog years!`;
  }
  if (agesB === 14) {
    return `Your doggie is ${agesB} years old in dog years!`;
  }
  if (agesC === 21) {
    return `Your doggie is ${agesC} years old in dog years!`;
  }
}

function main() {
  console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
  console.log(calculateDogAge(2)); // -> "Your doggie is 14 years old in dog years!"
  console.log(calculateDogAge(3)); // -> "Your doggie is 21 years old in dog years!"
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== "test") {
  main();
}
module.exports = calculateDogAge;
