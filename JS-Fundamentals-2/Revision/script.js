"use strict";
/* 
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
// Function Calling another function
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
*/

/* */
///////////////////////////
// Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends[3] = "Peter";
console.log(friends);

// friends = ["Bob", "John"];

const firstName = "Ashwini";
const ashwini = [firstName, "Patil", 2037 - 1991, "Programmer", friends];
console.log(ashwini);
console.log(ashwini.length);

// Excercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

///////////////////////////
// Array Operations/ Array Methods
const friendsNew = ["Michael", "Steven", "Peter"];
// Add elements
const newLength = friendsNew.push("Jay");
console.log(friendsNew);
console.log(newLength);

friendsNew.unshift("John");
console.log(friendsNew);

// Remove elements
const popped = friendsNew.pop();
console.log(friendsNew);
console.log(popped);

friendsNew.shift();
console.log(friendsNew);

console.log(friendsNew.indexOf("Steven"));
console.log(friendsNew.indexOf("Bob")); // -1

console.log(friendsNew.includes("Steven"));
console.log(friendsNew.includes("Bob"));

if (friendsNew.includes("John")) {
  console.log("You have a friend called Peter");
}

///////////////////////////
// Objects / Dot or Bracket notation
const ashwiniArray = [
  "Ashwini",
  "Patil",
  2037 - 1991,
  "Programmer",
  ["Michael", "Steven", "Peter"],
];

const ashwiniObject = {
  firstName: "Ashwini",
  lastName: "Patil",
  age: 2037 - 1991,
  job: "Programmer",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(ashwiniObject);
console.log(ashwiniObject.lastName);
console.log(ashwiniObject["lastName"]);

const nameKey = "Name";
console.log(ashwiniObject["first" + nameKey]);
console.log(ashwiniObject[`first${nameKey}`]);
console.log(ashwiniObject[`last${nameKey}`]);

const interestedIN = "";
// prompt(
//   "What do you want to know about Ashwini? Choose b/w firstName, lastName,age,job and friends."
// );
console.log(interestedIN);
// console.log(jonas.interestedIN);
console.log(ashwiniObject[interestedIN]);

if (ashwiniObject[interestedIN]) {
  console.log(ashwiniObject[interestedIN]);
} else {
  console.log(
    `Wrong request! Choose b/w firstName, lastName,age,job and friends.`
  );
}

ashwiniObject.location = "Portugal";
ashwiniObject["twitter"] = "ashwini@twitter.com";
console.log(ashwiniObject);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'

console.log(
  `${ashwiniObject.firstName} has ${ashwiniObject.friends.length} friends, and his best friend is called ${ashwiniObject.friends[0]}`
);

/////////////////////////////
// Object Methods
const ashwiniObject1 = {
  firstName: "Ashwini",
  lastName: "Patil",
  birthYear: 1991,
  job: "Programmer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(ashwiniObject1);
console.log(ashwiniObject1.calcAge());
console.log("Age : ", ashwiniObject1.age);
// console.log(ashwiniObject1["calcAge"]());

// Challenge
// "Jonas is a 46 yeras old teacher and he has a/no driver's license "
console.log(ashwiniObject1.getSummary());
