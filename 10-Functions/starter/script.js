'use strict';

/*

// Default values

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 3, 420);
createBooking('LH123', 2);
createBooking('LH123', undefined, 150);
createBooking('LH123');

const flight = 'LH234';
const thomas = {
  name: 'Thomas P',
  passport: 84268721,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;
  if (passenger.passport === 84268721) {
    console.log('Check in!');
  } else {
    console.log('Wrong passport!');
  }
};

// checkIn(flight, thomas);
// console.log(flight);
// console.log(thomas); // mutated by function (reference type!)

// // is the same as doing...
// // const passenger = thomas;
// const flightNum = flight;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(thomas);
console.log(thomas.passport);
checkIn(flight, thomas);

// passing by value, passing by reference
// JS only has passing by value

// FIRST CLASS FUNCTIONS vs HIGHER ORDER FUNCTIONS
// function are simply values, just another type of object (objects are values, therefore functions are values, too)
// functions can also be returned FROM functions
// we can call methods on functions

// Higher order function: Receives function as argument AND/OR returns function

// Functions that are passed in are CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', upperFirstWord);

const high5 = function () {
  console.log('Yeeay');
};

// JS uses callbacks all the time

document.body.addEventListener('click', high5); // event listener is higher order function!

['Thomas', 'Markus', 'Andreas'].forEach(high5); // forEach is higher order function with callback

// Functions RETURNING functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Thomas');
// greeterHey('Steven');

// greet('Hello')('Markus'); // call in one line

const greetArrow = greeting => name => console.log(`${greeting} ${name}`); // Implicit return?

const greeterHey = greetArrow('Hey');
greeterHey('Thomas');
greeterHey('Steven');
greetArrow('Hi')('Darling');

//



const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Thomas P.');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work!
// book(23, "Sarah Williams");

// CALL method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 512, 'Beyonce Bowles');
console.log(swiss);

// APPLY method (does not receive arguments but an array), should prefer CALL though
const flightData = [5847, 'George Barry'];
book.apply(swiss, flightData);
console.log(swiss);

// prefer CALL and spread operator!
book.call(swiss, ...flightData);

// Bind method (bind does not call function immediately, it returns a new function)

// book.call(swiss, ...flightData);
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(203, 'Stevy Willy');

const bookEW23 = book.bind(eurowings, 23); // partial application
bookEW23('Tommy K.');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // this points to button!
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // does not work, this points to button!

// Partial application (presetting parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.19); // null because this keyword not needed
console.log(addVAT(200));

// const addTaxFunction = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

const addTaxFunction = rate => value => value + value * rate;

const addVATnew = addTaxFunction(0.19);
console.log(`Calculated total is ${addVATnew(100)}`);


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const choice = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    this.registerAnswer(choice);
  },
  registerAnswer(choice) {
    if (typeof choice === 'number' && choice >= 0 && choice <= 3) {
      this.answers[choice] += 1;
      console.log('Answer saved.');
    } else {
      alert('Invalid answer! Try again:');
      this.registerNewAnswer();
    }
    this.displayResults(this.answers, 'string');
  },
  displayResults(type) {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(`Answers are: ${this.answers}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

// const displayResultsStr = poll.displayResults.bind(data);
// const displayResultsStr = poll.displayResults.bind(null, 'string');
// const displayResultsArr = poll.displayResults.bind(null, 'array');
// displayResultsStr(data1);
// displayResultsArr(data1);
// displayResultsStr(data2);
// displayResultsArr(data2);

poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data2 }, 'array');


// immediately invoked function expressions (IIFE)

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// paranthesis transform it into expression
// !!!!!
(function () {
  console.log('This will never run again');
  const isPrivate = 23; // private / encapsulated
})();

// console.log(isPrivate);

(() => console.log('This will also never run again'))();

// WHY???

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);


// Closures
// Closure happens in certain situations

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`passenger count: ${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// Closure makes functions remember their variable environment of when they were created / born

// variables in closure have priority over global variables!!

// closure is like a backpack, that the function is carrying around

// look into the backpack:

console.dir(booker);

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Reassigning f function (in function h)
h();
f();

// Example 2: timer. setTimeout has access to variables even after boardPassengers has finished running

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000; // does not have priority over variable inside function
boardPassengers(180, 3);

*/

// Closure challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.addEventListener('click', function () {
    console.log('clicked');
    header.style.color = 'blue';
  });
})();
