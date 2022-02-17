"use strict";

function selectRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  // TODO complete this function
  const rdNumberOfKids = selectRandomly(numKids);
  const rdPartnerNames = selectRandomly(partnerNames);
  const rdLocations = selectRandomly(locations);
  const rdJobTitles = selectRandomly(jobTitles);
  return `You will be a ${rdJobTitles} in ${rdLocations}, married to ${rdPartnerNames} with ${rdNumberOfKids} kids.`;
}

function main() {
  const numKids = [2, 1, 3, 4, 5];

  const partnerNames = ["Alisha", "Ahana", "Eva", "Sara", "Pari"];

  const locations = ["Roermond", "Eindhoven", "Utrecht", "Amsterdam", "Weert"];

  const jobTitles = [
    "Web Developer",
    "Computer Scientist",
    "Web Desiger",
    "Network Administrator",
    "Technical Specialist",
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== "test") {
  main();
}
module.exports = tellFortune;
