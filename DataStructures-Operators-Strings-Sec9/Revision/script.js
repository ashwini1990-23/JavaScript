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
/*
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
