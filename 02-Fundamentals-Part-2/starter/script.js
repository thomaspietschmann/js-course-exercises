'use strict'; // forbids to do some things, creates visible errors in the console
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive now!");
function logger() {
  console.log("I'm logging something");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 4));


// function declaration can be called before defined!

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression, can only be called AFTER being initialized

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// arrow function, type of function expression
// explicit return

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
console.log(calcAge3(1992));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);


  const juice = `Juice with ${apples} apples and ${oranges} oranges results in ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const calcRetirement = function (age) {
  return 65 - age;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));



const calcAverage = (val1, val2, val3) => {
  return (val1 + val2 + val3) / 3;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(265, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / 2 > avgKoalas) {
    console.log(`Dolphins win with ${avgDolphins} points!`)
  } else if (avgKoalas / 2 > avgDolphins) {
    console.group(`Koalas win with ${avgKoalas} points!`);
  } else {
    console.log("No winner.");
  }
}

checkWinner(scoreDolphins, scoreKoalas);


const firstName = "Thomas;"
const friends = [firstName, "Michael", "Petra", 2037 - 11];
console.log(friends.length);
friends[2] = "Someone else";
console.log(friends);

const newLength = friends.push("Dog");
console.log("new length =" + newLength);
console.log(friends);

friends.unshift("Petra");
friends.unshift("Petra");
friends.unshift("Petra");
friends.unshift("Petra");
console.log(friends);

console.log(friends.indexOf("Dog"));
console.log(friends.indexOf("Bob"));
console.log(friends.indexOf("Petra"));

console.log(friends.includes("Thomas"));
console.log(friends.includes("Petra"));


const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.20;
  }
}

// const tip = calcTip(300);
// console.log(tip);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);


const thomas = {
  firstName: "Thomas",
  lastName: "Pietschmann",
  age: 2020 - 1980,
  job: "busy",
  friends: ["Peter", "Steffi", "Marco"]
}

console.log(thomas);
console.log(thomas.keys);
// dot notation
console.log(thomas.firstName);

// brackets notation
console.log(thomas["lastName"]);
const nameKey = "Name";
console.log(thomas["first" + nameKey]);
console.log(thomas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Thomas?");
// if (thomas[interestedIn]) {
  //   console.log(thomas[interestedIn]);
  // } else {
//   console.log("Value doesn't exist...")
// }


// Thomas has 3 friends and his best friend is called Marco.

console.log(`${thomas.firstName} has ${thomas.friends.length} and his best friend is ${thomas.friends[2]}`);

const thomas = {
  firstName: "Thomas",
  lastName: "Pietschmann",
  birthYear: 1980,
  job: "busy man",
  friends: ["Peter", "Steffi", "Marco"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license. Además he has ${this.friends.length} friends.`
  }
}

// console.log(thomas.calcAge(thomas.birthYear));
console.log(thomas.firstName);
console.log(thomas);
console.log(thomas.calcAge());
console.log(thomas.age);
console.log("Hmmm");

console.log(thomas.getSummary());


const mark = {
  firstName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2);
    return this.bmi;
  }
}

const john = {
  firstName: "John",
  mass: 192,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2);
    return this.bmi;
  }
}

// console.log(mark.calcBMI());
console.log(mark.bmi);
console.log(john.bmi);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.firstName}'s BMI is ${john.bmi} and therefore higher than ${mark.firstName}'s BMI of ${mark.bmi}`);
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}



const thomas = [
  "Thomas",
  "Pietschmann",
  2020 - 1980,
  "happiness manager",
  ["Steffi", "Peter", "Marco"]
]
const types = [];

for (let i = 0; i < thomas.length; i++) {
  // Reading from array
  console.log(thomas[i], typeof thomas[i]);
  // Adding to array
  // types[i] = typeof thomas[i];
  types.push(typeof thomas[i]);
}

console.log(types);

const years = [1992, 2007, 1969, 2019];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2020 - years[i])
}

console.log(ages);


const thomas = [
  "Thomas",
  "Pietschmann",
  2020 - 1980,
  "happiness manager",
  ["Steffi", "Peter", "Marco"]
]
const types = [];

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < thomas.length; i++) {
  if (typeof thomas[i] !== "string") continue;
  console.log(thomas[i], typeof thomas[i]);
}

// continue and break
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < thomas.length; i++) {
  if (typeof thomas[i] === "number") break;
  console.log(thomas[i], typeof thomas[i]);
}

*/
const thomas = [
  "Thomas",
  "Pietschmann",
  2020 - 1980,
  "happiness manager",
  ["Steffi", "Peter", "Marco"]
]

for (let i = thomas.length - 1; i >= 0; i--) {
  console.log(`Index: ${i}`, thomas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log("Starting exercise")
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Exercise ${exercise}, repetition ${rep}`);
  }
}
