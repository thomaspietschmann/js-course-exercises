'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

    // passing object of arguments to method

    restaurant.orderDelivery({
      time: '22.30',
      address: 'Via del sole 21',
      mainIndex: 2,
      starterIndex: 2,
    });

restaurant.orderDelivery({
  address: 'Via del sole 25',
  starterIndex: 2,
});

// Destructuring objects

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(openingHours);
*/
/*
console.log(restaurantName, hours, tags);

// nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// setting default values

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// mutating variables

let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};
console.log(obj);

({ a, b } = obj);

console.log(a, b);

/*

// array destructuring

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring assignment
const [x, y, z] = arr

console.log(a, b, c);
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching main and secondary the long way
// const temp = main;
// main = secondary;
// secondary = temp;

// switching variables the easier way
[main, secondary] = [secondary, main];
console.log(main, secondary);


// how to receive two return values from a function call and assign them to two variables
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


// destructuring of nested arrays
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);



// Spread operator: unpack all elements of array at once

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

const goodNewArr = [1, 2, ...arr]; // Spread operator!
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets, NOT objects

const str = 'Thomas';
console.log(...str);
console.log(...'Shiva');
const letters = [...str, ' ', 'P.'];
console.log(letters);

// Real world example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {
  ...restaurant,
  founder: 'Giuseppe',
  city: 'Rome',
  foundedIn: 1998,
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);



// Rest pattern: pack elements into an array (opposite of spread operator)

// 1) Destructuring

// SPREAD because on RIGHT side of =

const arr = [1, 2, 3, 4, 5];

// REST because on LEFT side, it takes the rest of elements and puts them into array. Always needs to be the last in the destructuring assignment

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions / REST parameters
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 7, 3, 2);
add(5, 7, 3, 1, 9, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('Mushrooms');

// logical operators can use and return any datatype, short-circuiting
// in OR: if first value is truthy, it will immediately return the first value

console.log(3 || 'Thomas');
console.log('' || 'Thomas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = (restaurant.numGuests = restaurant.numGuests
  ? restaurant.numGuests
  : 10);
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// short circuiting with AND

console.log(0 && 'Thomas'); // imediately returns falthy value
console.log(1 && 'Thomas');
console.log('Hello' && 23 && null && 'Thomas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// only run method if method exists
restaurant.orderPizza && restaurant.orderPizza('tomato', 'cheese');

// Nullish Coalescing Operator
restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10; // nullish values instead of falthy values: only null and undefined
console.log(guestCorrect);

*/

// Coding challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`The average odd is ${average.toFixed(2)}`);
Math.round;

const oddEntries = Object.entries(game.odds);
for (const [team, odd] of oddEntries) {
  game[team] && console.log(`Odd of victory ${game[team]}: ${odd}`);
  !game[team] && console.log(`Odd of draw: ${odd}`);
}

for (const [team, odd] of oddEntries) {
  const teamStr = team === 'x' ? 'draw' : `victory of ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/*

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  let num = 0;
  players.forEach(player => {
    console.log(player);
    num++;
  });
  console.log(`${num} goals in total`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log((team1 < team2 && 'Team1 will win') || 'Team2 will win');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// FOR-OF LOOP

for (const item of menu) console.log(item);

// ACCESS INDEX in FOR-OF LOOP

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} - ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i} - ${el}`);
}


// Easier ways to write object literals

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// computed object keys
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Enhanced object literals
  openingHours,
  // easier method for syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
*/
/*
console.log(restaurant);

// optional chaining .?

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// can't read undefined of open
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//only if "mon" exists, "open" will be read.

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// IMPORTANT!

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [{ name: 'Thomas', email: 'hello@thomas.com' }];

console.log(users[0]?.name ?? 'User array empty');



// Looping objects

const openingHours = restaurant.openingHours;
console.log(openingHours);

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
// PROPERTY NAMES
console.log(`We are open on ${properties.length} days!`);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

// PROPERTY ENTRIES of entire object, transforms object into an array
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

*/
