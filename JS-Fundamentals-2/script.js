"use strict";

/*
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

const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    calcSummary: function () {
        return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence`;
    }
};
console.log(jonas1.calcAge());
//console.log(jonas1['calcAge'](1991)); // Calling method in bracket notation

console.log(jonas1.calcSummary());


// Challenge #3
// 1
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName} (${john.bmi})`)
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName} (${mark.bmi})`)
}

// Looping Arrays, Breaking and Continuing
const jonas3 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas3.length; i++) {
    // Reading from jonas array
    console.log(jonas3[i], typeof jonas3[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas3[i]);
}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
    //  ages.push(2037-years[i]);
}
console.log(ages)

// WHILE
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

// Challenge: 4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/*
// Write your code below. Good luck! 🙂
// 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2
const totals = [];
const tips = [];

// 3
for (let i = 0; i <= bills.length - 1; i++) {
    // tips[i] = calcTip(bills[i]);
    // totals[i] = bills[i] + tips[i];
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);
*/

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


/*
// Functions
function logger() {
    console.log('My name is Jonas');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations vs Function Expressions
// Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years..`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor1(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor1(2, 3));
*/

// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// 1: way of creating an array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // (3) ['Michael', 'Steven', 'Peter'] : in console
// 2: another way of creating an array
const years = new Array(1991, 1984, 2008, 2009);
console.log(years);

console.log(friends[0], friends[2], years[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Basic Array Operations(methods)
const friendsNew = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friendsNew.push('Jay');
console.log(friendsNew);
console.log('Push value :', newLength);

friendsNew.unshift('John');
console.log(friendsNew);

// Remove  elements
friendsNew.pop();
const popped = friendsNew.pop();
console.log(friendsNew);
console.log(popped);

friendsNew.shift();
console.log(friendsNew);