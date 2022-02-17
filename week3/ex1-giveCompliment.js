"use strict";

function giveCompliment(myName) {
  const compliments = [
    "Courageous",
    "Great",
    "Awesome",
    "Amazing",
    "Wonderful",
    "Contagious",
    "Kindness",
    "Super",
    "Grateful",
    "Best",
  ];

  let randomly = compliments[Math.floor(Math.random() * compliments.length)];
  return `Your are ${randomly}, ${myName}!`;
}

function main() {
  const myName = "Clement";
  console.log(myName);
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = "Sunday";
  console.log(yourName);
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== "test") {
  main();
}
module.exports = giveCompliment;
