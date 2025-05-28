'use strict';
/*
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
*/

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


/*
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
*/

// Inheritance Between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.clacAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.clacAge();

// Inheritance Between "Classes": ES6 Classes
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    clacAge() {
        console.log(2037 - this.birthYear);
    }

}

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        // Need to happen first
        super(firstName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
}

const martha = new StudentCl('Martha Jonas', 2012, 'Computer Science');
martha.introduce();
martha.clacAge();

// Inheritance between classes: Object.create()
const PersonProto = {
    clacAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

// Another class Example
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // Public Interface(API's) of object acc1
    deposit(val) {
        this.movements.push(val);
    }
    // Public Interface(API's) of object acc1
    withdrawl(val) {
        // this.movements.push(val);
        this.deposit(-val);
    }
}

const acc1 = new Account('John', 'EUR', 1111);

// acc1.movements.push(100);
// acc1.movements.push(-200);
acc1.deposit(250);
acc1.withdrawl(140);
console.log(acc1);


// Encapsulation: Private Class Feilds and Methods

class AccountCl {
    // Public fields
    locale = navigator.language;
    bank = 'Bankist';
    //Private fields
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // Public Interface(API's) of object acc1 / Public methods
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    // Public Interface(API's) of object acc1
    withdrawl(val) {
        // this.movements.push(val);
        this.deposit(-val);
        return this;
    }
    // Private Method
    #approveLoan(val) {
        return true;
    }
    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
        return this;
    }

}

const accCl1 = new AccountCl('John', 'EUR', 1111);

// Chaining methods
const movs = accCl1.deposit(10)
    .withdrawl(20)
    .withdrawl(30)
    .requestLoan(40)
    .withdrawl(50)
    .getMovements();

console.log(accCl1);
console.log(movs);