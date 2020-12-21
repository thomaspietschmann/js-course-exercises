'use strict';

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
