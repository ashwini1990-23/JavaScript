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


console.log(john.__proto__);
console.log(john.__proto__.__proto__);
console.log(Person.prototype.constructor);

// ES6 Classes
//Class Expression
// const PersonCl = class {

// }
// Class Declaration
/*class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Method will be added to the .prototype property of the class
    clacAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set age(age) {
        this.age;
    }
};

const jessica = new PersonCl('Jessica', 1990);
console.log(jessica);
jessica.clacAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// Can create methods on prototype
PersonCl.prototype.greet = function () {
    console.log(`hello ${this.firstName}`);
}
jessica.greet();
*/

// Getters and Setters
const account = {
    owner: 'John',
    movements: [100, 200, 34, 450],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log('getters and setters:', account.latest);

account.latest = 500;
console.log(account.movements);



// Getters and Setters for class : Data validation
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Method will be added to the .prototype property of the class
    clacAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // This pattern we use whenever we are trying to set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
};

const jessica = new PersonCl('Jessica Davis', 1990);

console.log(jessica.age);