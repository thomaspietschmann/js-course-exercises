// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price);
// console.log(tq);
// console.log('Importing module');

// Using import to Object like a "Class"
/*
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

*/
// default import
import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';
add('milk', 10);

console.log(cart);

/*
// AVOID!
// // mixing all in one import statement
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
add('pizza', 3);
add('apple', 2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} o ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} o ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 2);

*/
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// for parcel, will automatically inject new package into browser without reloading maintaining state
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${name}`);
  }
}

const thomas = new Person('Thomas');

console.log('Thomas' ?? null);

// not all features can be transpiled

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('Test').then(x => console.log(x));

// but they can be polyfilled :)

// import 'core-js/stable'; // will import EVERYTHING
import 'core-js/stable/array/find'; // will import EVERYTHING
import 'core-js/stable/promise'; // will import EVERYTHING

// Polyfilling async functions
import 'regenerator-runtime/runtime';
