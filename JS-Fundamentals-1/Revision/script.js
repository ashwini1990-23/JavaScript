// Values and Variables
/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Ashwini");
console.log(23);

let firstName = "Ashwini";
console.log(firstName);
let PI = 3.142;


// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// let, const, var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;


// Basic Operators: Airthematic, Comparision, Logical and Assignment
const ageAshwini = 2037 - 1991;
console.log(ageAshwini);

const firstName = "Ashwini";
const lastName = "Patil";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

let x = 10 + 5;
x += 10; // x=x+10
console.log(x);


/////////////////////////////////
// Strings and template literals
const firstName = "Ashwini";
const job = "Programmer";
const birthYear = 1991;
const year = 2037;

const ashwini = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ashwini);

console.log(`String
with
multiple lines`);


/////////////////////////////////
// Taking decisions: if() else statements
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yerasLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yerasLeft} years :) `);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


/////////////////////////////////
// Type Conversion and Type Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(typeof (inputYear + 18));

console.log(Number("Ashwini"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log("23" - "10" - 3);


/////////////////////////////////
// Truthy and Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ashwini"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yey! height is defined!");
} else {
  console.log("Height is UNDEFINED");
}
  

/////////////////////////////////
// Equality Operators(==, ===)
const age = 18;
if (age === 18) {
  console.log("You just became an adult");
}

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}


/////////////////////////////////
// Logical operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
*/

/////////////////////////////////
// Switch statement
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetups");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid week day");
}

console.log("if-else-if");
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetups");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid week day");
}

/////////////////////////////////
// Conditional(Ternary) operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
