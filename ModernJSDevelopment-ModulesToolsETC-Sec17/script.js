// Importing Module
/*import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
addToCart('bread', 5);
console.log(price, tq);
*/
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Importing from default exports
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

////////////////
// Top-level await
/*
console.log('Start fetching....');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('End of fetching....');
*/
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

//////////////////
// Module Pattern
(function () {
    const cart = [];
    const shippingCost = 10;

})();