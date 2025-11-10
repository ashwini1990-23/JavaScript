'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours:openingHours,

  // ES6 Enhanced Object literl
  // 1)
  openingHours,
  // 2)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ingredients ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/*
//////////////////////////////////////////
// Looping Objects
// Property Names / keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values / values
const values = Object.values(openingHours);
console.log(values);
for (const hour of values) {
  console.log(hour.open, hour.close);
}

//Loop over entire Object: keys+values
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

//////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Ashwini'));
console.log(new Set());

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rissotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Real world use case of Set : 1) to remove duplicate values from an Array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);
// 2) counting how amny diff letters there are in a String
console.log(new Set('AshwiniPatil'));
console.log(new Set('AshwiniPatil').size);

//////////////////////////////////////////
// New Operations of Sets
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);
console.log([...italianMexicanFusion]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Differenc Italian: ', uniqueItalianFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican: ', uniqueMexicanFoods);

const uniqueItalianANdMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference: ', uniqueItalianANdMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

///////////////////////////////////////////
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Forenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

///////////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer));

console.log(question.get(question.get('correct') === answer));

// Convert Map to an Array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////////////////////
// STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B707'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1, airline.length));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  // console.log(s);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Ashwini'));
console.log(typeof new String('ashwini'));
*/

//////////////////////////////////////////
// Strings - Part-2 (String Methods)
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Ashwini'.toLowerCase());
console.log('Ashwini'.toUpperCase());

// To fix Capitalization in Passenger's name
const passenger = 'aShwINi'; // 'Ashwini'
const passenegrLowerCase = passenger.toLowerCase();
console.log(passenegrLowerCase);
const correctPasseneger =
  passenegrLowerCase[0].toUpperCase() + passenegrLowerCase.slice(1);
console.log(correctPasseneger);

// Comparing user input email
const email = 'hello@example.io';
const loginEmail = '  Hello@Example.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// To Replace part of a string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '. ');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// const correctAnnouncement = announcement.replace('door', 'gate');
// const correctAnnouncement = announcement.replaceAll('door', 'gate');
const correctAnnouncement = announcement.replace(/door/g, 'gate');
console.log(correctAnnouncement);

// String Methods that return Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the new Airbus family');

const checkbaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed onboard');
  } else {
    console.log('Welcome aboard');
  }
};

checkbaggage('I have a laptop, some Food and a pocket Knife');
checkbaggage('Socks and camera');
checkbaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////
// Working with Strings- Part-3
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Ashwini Patil'.split(' '));

const [firstName, lastName] = 'Ashwini Patil'.split(' ');
console.log(firstName, lastName);

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizePassengerName = function (name) {
  const names = name.split(' ');

  const namesUpper = [];
  for (const item of names) {
    // namesUpper.push(item[0].toUpperCase() + item.slice(1));
    namesUpper.push(item.replace(item[0], item[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizePassengerName('jessica ann smith davis');
capitalizePassengerName('ashwini patil');

// Padding a String
const message = 'Got to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Ashwini'.padStart(10, '+'));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + '';
  // console.log(str);
  const newStr = str.slice(-4).padStart(str.length, '*');
  // console.log(newStr);
  return newStr;
};
console.log(maskCreditCard(12345678));
console.log(maskCreditCard('1234567890'));

// Repeat
const message2 = 'Bad weather... All departures will be delayed... ';
console.log(message2.repeat(5));

const palnesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
palnesInLine(5);
palnesInLine(3);
palnesInLine(12);

/*
///////////////////////////////////////////
// Logical Assignment operator
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Logical OR assignment operator: ||=
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Logical Nullish Assignment: ??=
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Logical AND assignment operator: &&=
// rest2.owner = rest2.owner && '<Anonymous>';
// rest1.owner = rest1.owner && '<Anonymous>';

rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1);
console.log(rest2);

//////////////////////////////////////////
// Looping Arrays: for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

for (const [index, item] of menu.entries()) {
  // console.log(item);
  console.log(`${index + 1}: ${item}`);
}
// console.log([...menu.entries()]);

/////////////////////////////////////////
// Enhanced Object Literal: written code in above Object

///////////////////////////////////////////
// Optional Chaining
console.log('-------- Optional Chaining -----------');
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining : ?.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// Real world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Optinal chainig for Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');
// Arrays with Optional chaining
const users = [{ name: 'Ashwini', email: 'ashwini@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

///////////////////////////////////////////
// Spread Operator

const arr = [7, 8, 9];
console.log(...arr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow copy of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log('Shallow copy: ', mainMenuCopy);

// Join or Merge 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: Arrays, Strings, Maps and Sets but NOT Objects
const str = 'Ashwini';
console.log(...str);
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real World example
const ingredients = [
  // prompt(`Let's make Pasta! Ingrdient 1?`),
  // prompt(`Ingrdient 2?`),
  // prompt(`Ingrdient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects with Spread Operator
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

///////////////////////////////////////////
// Rest Pattern and Rest Operator

// 1. Destructuring
// Spread: because on RIGHT hand side of the assignment operator
const arr1 = [1, 2, ...[3, 4]];

// Rest: because on Left hand side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects with Rest
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2. Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(5, 3);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//////////////////////////////////////////
console.log('------ OR -------');
// Short Circuiting(&& , ||)
// They can use any data type
console.log(3 || 'Ashwini');
console.log('' || 'Ashwini');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------- AND -----------');
console.log(0 && 'Ashwini');
console.log(7 && 'Ashwini');
console.log('Hello' && '23' && null && 'Ashwini');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms');

///////////////////////////////////
// Nullish Coalacing operator : ??

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
////////////////////////////////////
// Object Destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del SOle,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del SOle,21',
  starterIndex: 1,
});

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Object destructuring
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

console.log('-------------------------------------------------');

/////////////////////////////////////////////
// Array Destructuring
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); 

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
// Receive 2 return values from a function
const [starer, main1] = restaurant.order(2, 0);
console.log(starer, main1);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [first, , [third, fourth]] = nested;
console.log(first, third, fourth);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
