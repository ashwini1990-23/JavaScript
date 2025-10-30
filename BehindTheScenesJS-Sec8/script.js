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
};

calcAgeNew(1991);
