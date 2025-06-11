/*
let js = 'amazing';
if (js === 'amazing') alert('JS is FUN!');

console.log(40 + 23);


// Values and Variables
console.log('Jonas');
console.log(24);
let firstName = 'Jonas';
console.log(firstName);
*/

/*
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof 'Jonas');
console.log(typeof true);
console.log(typeof 24);
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
console.log(year);

year = 1991;
console.log(typeof year);
console.log(year);

console.log(typeof null);
*/

/*
// let,const ,var
let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1989;
// const year;

var job = 'programmer';
job = 'teacher';

lastName = 'Gill';
console.log(lastName);
*/

/*
// Basic Operators
// Arithematic operators : +, -,*,/,**
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageMaria = currentYear - 2018;

console.log(ageJonas, ageMaria);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Mathew';
console.log(firstName + ' ' + lastName);
// Assignment operators: =, +=,-=
let x = 10 + 5;
x += 10;  // x=x+10;
x *= 4; // x=x*4
x++; // x=x+1
x--;
x--;
console.log(x);
// Comparison  Operators: >,<,>=,<=
console.log(ageJonas > ageMaria);
console.log(ageMaria >= 18);

const isFullAge = ageMaria >= 18;


// Operator Precedence
console.log(currentYear - 1991 > currentYear - 2018);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageJonas + ageMaria) / 2;
console.log(ageJonas, ageMaria);
console.log(averageAge);

// Strings and Template Literals
const firstName1 = 'Jonas';
const job = 'teacher';
const birthYear1 = 1991;
const year = 2037;

const jonas = `I'm ${firstName1}, a ${year - birthYear1} years old ${job}! `;
console.log(jonas);

console.log(`Just a regular string..`);

console.log('String with \n\
multiple \n\
lines ');

console.log(`String
with multiple
lines`);

// Taking decisions: if/else statements
const age = 15;
const isFullAge1 = age >= 18;
console.log(isFullAge1);

if (isFullAge1) {
    console.log('Sarah can start driving licence🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYearJonas = 2012;
let century;
if (birthYearJonas <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/


// Type Conversion and Type Coercion
//type conversion
const inputYear = '1991';
console.log(inputYear);
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

// Truthy and Falsy Values
// Falsy Values: 0, ' ', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job.");
}

let height;
if (height) {
    console.log("yeyy height is defined..");
} else {
    console.log("Height is Undefined.");
}

// Equality Operators: == , ===
const age = '18';
if (age === 18) console.log("You just became an adult :) :  strict");

if (age == 18) console.log("You just became an adult :) : loose");

const favourite = Number(prompt("Whta's ypur faviorate number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool. 23 is an amazing number");
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}