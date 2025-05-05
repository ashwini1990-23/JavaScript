"use strict";

//#### Date: 02/05/2025 #####
// Array
// const friends1 = ['John', 'Adam', 'Lilly'];
// console.log(friends1.length - 1);
// console.log(friends1[friends1.length - 1]);

// Array Methods
const friends2 = ['John', 'Adam', 'Lilly'];
console.log(friends2)
friends2.push('Jay');  // Adds element to the end of the array // Mutates the original array //Returns length of the array
console.log(friends2);

friends2.unshift('Peter'); // Adds element at the start/beggining of the array // Mutates the original array //Returns length of the array
console.log(friends2);

const pop1 = friends2.pop(); // Removes last element in the array //Mutates the original array //Returns deleted element
console.log(friends2);
console.log(pop1);

friends2.shift(); // Removes first element in the array // mutates the array // returns deleted element


// ********** Objects *************
// Operator Precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// function logger(name) {
//   console.log(`Hello ${name}`);
// }
// logger("Ashwini");

//Coding challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// console.log(scoreDolphins * 2, scoreKoalas * 2);

// function checkWinner(avgDolphins, avgKaolas) {
//   if (avgDolphins >= avgKaolas * 2) {
//     console.log(`Dolphi's win the trophy (${avgDolphins} vs ${avgKaolas})`);
//   } else if (avgKaolas >= avgDolphins * 2) {
//     console.log(`Kpala's win the trophy(${avgKaolas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins the trophy :(`);
//   }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// Coding Challenge 2

// function calcTip(billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     const tip = (billValue * 15) / 100;
//     console.log(tip);
//     return tip;
//   } else {
//     const tip = (billValue * 20) / 100;
//     console.log(tip);
//     return tip;
//   }
// }
// //const tipValue = calcTip(40);

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Mathew",
//   birthYear: 1991,

//   job: "Teacher",
//   friends: ["Mary", "Bob", "Stefen"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${
//       this.job
//     }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas.getSummary());
// function () {
//   if (2037 - this.birthYear >= 18) {
//     return "a";
//   } else {
//     return "no";
//   }
// }
// console.log(jonas.firstName);
// console.log(jonas["lastName"]);

// jonas.location = "Germany";
// jonas.twitter = "@dadfd";
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
// );
// console.log(jonas.calcAge(1991));

// console.log(
//   `${
//     jonas.firstName
//   } is a ${jonas.calcAge()}-year old teacher, and he has ${jonas.hasDriversLicense()} driver's license  `
// );

// Challenge #3
// const markMiller = {
//   markFullName: "Mark Miller",
//   markMass: 78,
//   markHeight: 1.69,
//   calcBMI: function () {
//     this.bmi = this.markMass / (this.markHeight * this.markHeight);
//     return this.bmi;
//   },
// };

// const johnSmith = {
//   johnFullName: "John Smith",
//   johnMass: 92,
//   johnHeight: 1.95,
//   calcBMI: function () {
//     this.bmi = this.johnMass / (this.johnHeight * this.johnHeight);
//     return this.bmi;
//   },
// };
// markMiller.calcBMI();
// console.log(markMiller.bmi);
// johnSmith.calcBMI();
// console.log(johnSmith.bmi);
// let bmi = `${markMiller.calcBMI() > johnSmith.calcBMI()}`
//   ? `"${
//       markMiller.markFullName
//     }'s BMI (${markMiller.calcBMI()}) is higher than ${
//       johnSmith.johnFullName
//     }'s BMI(${johnSmith.calcBMI()})"`
//   : `"${
//       johnSmith.johnFullName
//     }'s BMI (${johnSmith.calcBMI()}) is greater than ${
//       markMiller.markFullName
//     }'s (${markMiller.calcBMI()})"`;
// if (markMiller.bmi > johnSmith.bmi) {
//   console.log(
//     `${markMiller.markFullName}'s BMI (${markMiller.bmi}) is greater than ${johnSmith.johnFullName}'s BMI (${johnSmith.bmi})`
//   );
// } else if (johnSmith.bmi > markMiller.bmi) {
//   console.log(
//     `${johnSmith.johnFullName}'s BMI (${johnSmith.bmi}) is greater than ${markMiller.markFullName}'s BMI (${markMiller.bmi})`
//   );
// }

// For loop

// const jonas = [
//   "Jonas",
//   "Schidtman",
//   2037 - 1991,
//   "Teacher",
//   ["Michal", "Bob", "Stefan"],
// ];

// for (let rep = 0; rep < jonas.length; rep++) {
//   console.log(jonas[rep]);
// }

// let rep = 1;
// while (rep <= 6) {
//   console.log(`Rolling.....`);
//   rep++;
// }

//##### Challenge 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(billValue) {
//   if (billValue >= 50 && billValue <= 300) {
//     const tip = (billValue * 15) / 100;
//     // console.log(tip);
//     return tip;
//   } else {
//     const tip = (billValue * 20) / 100;
//     // console.log(tip);
//     return tip;
//   }
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);
// function calcTip() {
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       console.log(tips.push(bills[i] * 0.15));
//       totals.push(bills[i] + tips[i]);
//       // return totals;
//     } else {
//       tips.push(bills[i] * 0.2);
//       totals.push(bills[i] + tips[i]);
//       // return totals;
//     }
//   }
// }
