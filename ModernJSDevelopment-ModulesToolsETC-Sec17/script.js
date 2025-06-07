// Importing Module
/*import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
addToCart('bread', 5);
console.log(price, tq);
*/
// console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Importing from default exports
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add, { cart, totalPrice } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

////////////////
// Top-level await
/*
console.log('Start fetching....');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('End of fetching....');

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastPOst = getLastPost();
console.log('Last post 1: ', lastPOst);

// Not very clean
// lastPOst.then(last => console.log(last));

const lastPOst2 = await getLastPost();
console.log('Last post 2:', lastPOst2);
*/

/*
//////////////////
// Module Pattern
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} orderd from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

///////////////////////////
// NPM
// import { cloneDeep } from "./node_modules/lodash-es/cloneDeep.js";
const state = {
    basket: [
        { item: 'banana', quantity: 3 },
        { item: 'mangoes', quantity: 5 },
        { item: 'oranges', quantity: 10 },
    ],
    user: { loggedIn: true },
}

const stateClone = Object.assign({}, state);
const stateDeepClone = structuredClone(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log('Structured Clone: ', stateDeepClone);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}

// Babel Configuration
class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null); // nullish coalacing operator

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// Polyfilling
// Importing Polyfilling library  or do it manually in terminal using cmd: npm i core-js
import 'core-js/stable'; // Instead of using whole library to polyfill we can cherrypick particular feature like array.find () method like below
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime'; // npm i regenerator-runtime