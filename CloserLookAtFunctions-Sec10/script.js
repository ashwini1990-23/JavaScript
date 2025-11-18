'use strict';

/*
////////////////////////////////
// Default Parameters
const bookings = [];
const createBooking = function (
  flightNumber,
  noOfPassengers = 1,
  price = 199 * noOfPassengers
) {
  // ES5 code
  // noOfPassengers = noOfPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNumber,
    noOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH12345', undefined, 900);

console.log('---------------------------');
///////////////////////////////////
const flight = 'LH234';
const ashwini = {
  name: 'Ashwini Patil',
  passport: 4768,
};

const checkIn = function (flightNum, passenger) {
  // console.log(flightNum, passenger);
  flightNum = 'LH999';
  // console.log(flightNum);
  passenger.name = 'Mrs.' + passenger.name;
  // if (passenger.passport === 4768) {
  //   alert('Checked in');
  // } else {
  //   alert('Wrong Passport');
  // }
};

// checkIn(flight, ashwini);
// console.log(flight);
// console.log(ashwini);

// Real world example
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(ashwini);
checkIn(flight, ashwini);
console.log(ashwini);

////////////////////////////////////
// Functions accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // console.log([first.toUpperCase(), ...others]);
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses Callbacks all the time
const high5 = function () {
  console.log('👋🏼');
};

document.body.addEventListener('keypress', high5);

['Jonas', 'Martha'].forEach(high5);
*/

////////////////////////////////
// Functions returnung other functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ashwini');
greeterHey('Steven');

greet('Hello')('Atharv');

// Using arrow function
const greetArrow = greeting => myName => console.log(`${greeting} ${myName}`);

greetArrow('HI')('Vishal');

////////////////////////////////
// call and apply method
const lufthanza = {
  airline: 'Lufthanza',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthanza.book(234, 'Ashwini Patil');
lufthanza.book(635, 'John Smith');
console.log(lufthanza);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthanza.book;
// Does not work
// book(23, 'Sarah Williams');

// call method
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthanza, 547, 'Mary Cooper');
console.log(lufthanza);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 687, 'Atharv Ptil');
console.log(swiss);

// apply method
const flightData = [456, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//////////////////////////////////////
// bind method
// book.call(euroWings,23, 'Sarah Williams')
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthanza);
const bookLX = book.bind(swiss);
bookEW(34, 'Steven Rout');
console.log(euroWings);

const bookEW11 = book.bind(euroWings, 11);
bookEW11('Ashwini Patil');

// With Event Listeners
lufthanza.planes = 300;
lufthanza.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthanza.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthanza.buyPlane.bind(lufthanza));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// addVAT=value=>value+value*0.23;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxF = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATF = addTaxF(0.23);
console.log(addVATF(100));
console.log(addVATF(23));

///////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log(`This will never run again`);
};
// runOnce();

// 1
(function () {
  console.log(`IIFE: This function will never run again`);
})();
// 2
(() => console.log(`IIFE: for Arrow function`))();

/////////////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//////////////////////////////////
// More Closures Examples
// 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 7;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// reassigning f function
h();
f();
console.dir(f);

// 2
