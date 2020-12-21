'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // Index where extraction starts
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3));
console.log(airline.slice(1, -3));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat.');
  } else {
    console.log('You are lucky.');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Thomas'));
console.log(typeof new String('Thomas'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'tHomas';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails

const email = 'hello@thomas.com';
let loginEmail = ' HelLo@thOmas.COM \n ';
loginEmail = loginEmail.toLowerCase().trim();
console.log(loginEmail === email);

// replacing

const priceEUR = '288,97€';
const priceUS = priceEUR.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23';

// replace only replaces first occurrency
console.log(announcement.replace('door', 'gate'));
// use RegEx with global flag
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
//includes, startsWith, endsWith

const planeNew = 'A320neo';
console.log(planeNew.includes('A320'));
console.log(planeNew.includes('Boeing'));
console.log(planeNew.startsWith('Boeing'));
console.log(planeNew.startsWith('A3'));
console.log(planeNew.endsWith('A320'));
console.log(planeNew.endsWith('neo'));

if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You cannot board!');
  } else {
    console.log('Welcome on board!');
  }
};
checkBaggage('I have a laptop, Food and pocket Knife');
checkBaggage('I have socks and a camera');
checkBaggage('I have snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Thomas Pietschmann'.split(' '));

const [firstName, lastName] = 'Thomas Pietschmann'.split(' ');
console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // Variant 1
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Variant 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith david');

// Padding a string

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Thomas'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskCreditCard(75849595);
maskCreditCard('7588385774849595');

// Repeat
const message2 = 'Bad weather...All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'#'.repeat(n)}`);
};

planesInLine(3);
planesInLine(6);

const convertToCamelCase = function () {
  const inputText = textarea.value;
  const inputWords = inputText.split('\n');
  const allCamelCasedWords = [];
  for (const word of inputWords) {
    const singleWords = word.trim().split('_');
    const camelCasedWord = [];
    for (const [index, w] of singleWords.entries()) {
      camelCasedWord.push(
        index === 0
          ? w.toLowerCase()
          : w[0].toUpperCase() + w.slice(1).toLowerCase()
      );
    }
    allCamelCasedWords.push(camelCasedWord.join('').padEnd(20));
  }
  for (const [index, cCWord] of allCamelCasedWords.entries()) {
    console.log(`${cCWord}${'✅'.repeat(index + 1)}`);
  }
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');
textarea.value = `underscore_case
first_name
  Some_Variable
    calculate_AGE
 delayed_departure`;
const button = document.querySelector('button');
button.addEventListener('click', convertToCamelCase);

//
