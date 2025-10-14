"use strict";
/* */
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
// const interface = "audio";
// const private = 11;

///////////////////////////
// Functions
function logger() {
  console.log("My name is Ashwini");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(2, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////
// Function Declarations and Function Expressions
// Function Declaration
function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log("Function Declaration: ", age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log("Function expression: ", age2);

///////////////////////
// Arrow Functions
const clacAge3 = (birthYear) => 2037 - birthYear;
const age3 = clacAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
const years = yearsUntilRetirement(1991, "Ashwini");
console.log(years);

///////////////////////
// Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
