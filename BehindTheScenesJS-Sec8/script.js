'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log( add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ashwini';
calcAge(1991);
// console.log(age);
// printAge();

///////////////////////////
// Hoisting and TDZ
// Variable hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ashwini';
let job = 'Programmer';
const year = 1991;

// Functions Hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example(Hoisting)
console.log(numberOfProducts);
if (!numberOfProducts) deleteShoppingCart();

var numberOfProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// diff b/w let const and var
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

///////////////////////////////
// this keyword
console.log(this);

const calcAgeNew = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeNew(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const ashwini = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

ashwini.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = ashwini.calcAge;
matilda.calcAge();

const f = ashwini.calcAge;
console.log(f);
// f();

/////////////////////////////////
// Regular functions vs Arrow functions

// var firstNameNew = 'Matilda';

const ashwiniNew = {
  firstNameNew: 'Ashwini',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    /*const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    }; */

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstNameNew}`);
  },
};
ashwiniNew.greet();
ashwiniNew.calcAge();

// "arguments" keyword
const addExprNew = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(addExprNew(2, 5));
addExprNew(2, 5, 8, 6);

var addArrowNew = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrowNew(2, 5, 8);

////////////////////////////
// Object References (Shallow vs Deep)
const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';
const marriedJessica = marryPerson(jessica1, 'Davis');

console.log('Before: ', jessica1);
console.log('After: ', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before: ', jessica);
console.log('After: ', jessicaCopy);

// Deep copy /Deep clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Ana');
jessicaClone.family.push('Robert');

console.log('Before clone: ', jessica);
console.log('After clone: ', jessicaClone);
