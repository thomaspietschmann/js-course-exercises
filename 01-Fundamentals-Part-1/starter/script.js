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



//convert string to number
const inputYear = "1991";
console.log(typeof inputYear);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Thomas"));
console.log(typeof NaN);

console.log(String(1980), 1980);

//type coercion, 2 values with different types

console.log("I am " + 40 + " years old.");
console.log("23" + "10" + 3);
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);




// false = not really false, but will false when converted to boolean
// 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Thomas"));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job.")
}
//truthy =

const age = 18;
if (age === 18) console.log("You jsut became an adult");
// === strict
// == loose
// use === as default to avoid bugs!

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);


if (favourite === 23) {
  console.log("23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also an awesome number");
} else {
  console.log("not such a great number...");
}

if (favourite !== 23) {
  console.log("Why not try 23?");
}
// !== different operator



const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
}


const scoreDolphins = (150 + 1 + 89) / 3;
const scoreKoalas = (150 + 1 + 89) / 3;

if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Dolphins win!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win!");
} else if (scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("It's a tie!");
} else {
  console.log("Nobody wins...");
}

// Switch statement

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("go to work...");
    console.log("go to coding meetup...");
    break;
    case "tuesday":
      console.log("Prepare food...")
      break;
      case "wednesday":
        case "thursday":
          console.log("Write code examples");
          break;
          default:
            console.log("Not a valid day");
          }


          // expressions result in values or booleans:
          3 + 4
          1991
          true && false && !false
          -- > result to true or false

          //statements result into actions
          if (23 > 10) {
            console.log("23 is bigger"); // string is an expression
          }

          const age = 23;
          age >= 18 ? console.log("I like beer.") : console.log("I should not drink.");

          const drink = age >= 18 ? "wine" : "water";
          console.log(drink);

          let drink2;
          if (age >= 18) {
            drink2 = "wine";
          } else {
            drink2 = "water";
          }
          console.log(drink2);

          // ternary operator is an expression!

          console.log(`I like to drink ${age >= 18 ? "beer" : "wine"}`)

          */
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
console.log(tip);

console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill + tip}`)

