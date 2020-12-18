'use strict';

/*

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1986) {
      var millennial = true; // function scoped
      // Creating new variable with same name as outer scope's variable
      const firstName = "Steven";
      // reassigning outer scope's variable
      output = "NEW OUTPUT";
      const str = `Oh, and you're a millennial, ${firstName}`; // Block scoped
      console.log(str);

      function add(a, b) {
        return a + b;
      }


    }
    console.log(millennial);
    // console.log(str); // error
    // add(2, 3); // error
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Thomas";
calcAge(1982);


// Hoisting

// Variables

console.log(me);
// console.log(job);
// console.log(year);

var me = "Thomas";
let job = "happiness manager";
const year = 1980;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr)(2, 3);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);

if (!numProducts) deleteShoppingCart();
// numProducts is undefined, therefore function is called! Not wanted!
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted.");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

// this keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(this); // undefined
}
calcAge(1980);

const calcAgeArrow = birthYear => {
  console.log(2020 - birthYear);
  console.log(this); // window, lexical this
}
calcAgeArrow(1981);

const thomas = {
  birthYear: 1980,
  calcAge: function () {
    console.log(2020 - this.birthYear);
  }
}

thomas.calcAge();


const matilda = {
  birthYear: 2017
};

// method borrowing
matilda.calcAge = thomas.calcAge;
console.log(matilda);
matilda.calcAge();

// const f = thomas.calcAge;
// f(); // undefined
const f = thomas;
f.calcAge();


// normal vs arrow functions

const thomas = {
  year: 1983,
  firstName: "Thomas",
  calcAge: function () {
    console.log(2020 - this.birthYear);
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },
}

thomas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;

}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Primitives (numbers, strings, booleans)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30
}

const friend = me;

friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);

// Primitive = primitive type
// objects = reference types
// All objects get saved in the HEAP
// primitives are stored in the call stack

//primitive type
let lastName = "Williams";
let oldLastName = "Williams";
lastName = "Burgers";
console.log(lastName);
console.log(oldLastName);

//reference type
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = "Burgers";
console.log(jessica);
console.log(marriedJessica);

*/
//copying objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"]
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Burgers";
console.log(jessica2);
console.log(jessicaCopy);
// Only works on first level! Object.assign only creates a "shallow copy", not a "deep clone"

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("Hugo");
console.log(jessica2);
console.log(jessicaCopy);
