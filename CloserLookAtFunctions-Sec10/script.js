'use strict';

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
  if (passenger.passport === 4768) {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
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

const high5 = function () {
  console.log('👋🏼');
};

document.body.addEventListener('keypress', high5);
