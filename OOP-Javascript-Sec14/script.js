'use strict';

// 1: Contsuctor Functions
const Person = function (firstName, birthYear) {
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this : to solve we use prototypes and prototypal inheritance
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

const john = new Person('John', 1989);
console.log(john);

const mary = new Person('Mary', 1990);
console.log(mary);

console.log(john instanceof Person);

// Prototypes
console.log('Prototypes')
console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

john.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(john));

Person.prototype.species = 'Homo';
console.log(john.species, mary.species);

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));
