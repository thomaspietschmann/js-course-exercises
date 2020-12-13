/* let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log("23 is a " + typeof 23);
console.log("Thomas is a " + typeof "Thomas");

jsIsFun = "Yes";

console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(year);
console.log(typeof year);

console.log(typeof null); // regarded as a bug, should return null

let age = 33;
age = 31;

const birthYear = 1980;
// birthYear = 1981; // assignment to constant variable error


const myAge = 40;
const yourAge = 39;
console.log(myAge - 3, yourAge / 2 ** 3); // 2 ** 3 means to to the power of 3 = 2 * 2 * 2
console.log(myAge < yourAge);

const isFullAge = myAge >= 18;
console.log(isFullAge);


x = 5;
x += 10;
x -= 1;
x++;
x--;
x *= 4;
console.log(x);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);



const firstName = "Thomas";
const job = "Happiness Manager";
const birthYear = 1980;
const year = 2020;

const thomas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(thomas);

// Template literals

const thomasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(thomasNew);

console.log("This is a \n\
traditional multiline \n\
string written with n line breaks");

console.log(`This is
a multiline
string created with
backticks!`);


const age = 15;
// const isOldEnough = age >= 18;


// Control structure

if (age >= 18) {
  console.log("Sarah can start her driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// Challenge 2

// BMI challenge 2

const bmi = (mass, height) => {
  return mass / height ** 2;
};

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const bmiMark = bmi(markMass, markHeight);
const bmiJohn = bmi(johnMass, johnHeight);


// const markHigherBMI = bmi(markMass, markHeight) > bmi(johnMass, johnHeight);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI is ${bmiMark} and therefore is higher than John's BMI of ${bmiJohn}`);
} else {
  console.log(`Mark's BMI is ${bmiMark} and therefore is lower than John's BMI of ${bmiJohn}`);
}

console.log("This is the last line.");
