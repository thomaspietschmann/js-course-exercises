'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  console.log(`These are the ${movements}`);
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (account.interestRate / 100))
    .filter(int => int > 1) // only add interests > 1
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// Event handlers

let currentAccount;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); // prevents form from submitting
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // optional chaining!!
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.value = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // field looses focus
    // display balance, summary and movements
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username != currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('Acount closed');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // delete account
    accounts.splice(index, 1); // splice from index exactly 1 element
    console.log(accounts);

    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    // Update UI
    inputLoanAmount.value = '';
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); //start to end
console.log(arr.slice(2, 4)); // start to index 4
console.log(arr.slice(-2)); // last 2 elements
console.log(arr.slice(1, -2)); // from position one to everything except last 2
console.log(arr.slice()); // creates shallow copy
console.log([...arr]); // same as above

// sPlice

// console.log(arr.splice(2)); // mutates original array!
// arr.splice(-1);
arr.splice(1, 2); // delete 2 elements from index 1
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'l'];
console.log(arr2.reverse()); // mutates the array!!
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// JOIN
console.log(letters.join('-'));

// WHOLE NEW LEVEL OF ARRAY METHODS

// loop with forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}. You deposited ${movement}`);
  } else {
    console.log(`${i + 1}. You withdrew ${Math.abs(movement)}`);
  }
}

// forEach and access index with forEach
// continue and break do NOT work with forEach!

movements.forEach(function (movement, i, arr) {
  // CALLBACK function!
  if (movement > 0) {
    console.log(`for Each index: ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`for Each index: ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
});

// forEach on MAPS and SETS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'GBP', 'GBP']);
// currenciesUnique.forEach(function (value, _key, map) {
//   console.log(`${key}: ${value}`);
// });
// careful: no key, so value and key will always be the same!

// coding challenge 1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const allDogs = [...dogsJuliaCorrected, ...dogsKate];
  // const allDogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(allDogs);
  allDogs.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult and is ${dog} years old.`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is ${dog} years old and is still a puppy.`
      );
    }
  });
};

const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
checkDogs(julia1, kate1);
checkDogs(julia2, kate2);

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// not recommended version
const movementsUSD2 = [];
for (const mov of movements) {
  movementsUSD.push(mov * eurToUsd);
}
console.log(movementsUSD2);

const movementsDescr = movements.map(
  (mov, i) =>
    `Movement: ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} €`
);
console.log(movementsDescr);

const deposits = movements.filter((mov, i, arr) => mov > 0);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// accumulator = "snowball"
// const balance = movements.reduce(function (acc, current, index, array) {
//   console.log(`Iteration ${index}: ${acc}`);
//   return (acc += current);
// }, 0); // 0 is the first value for the accumulator

const balance = movements.reduce((acc, current) => (acc += current), 0); // 0 is the first value for the accumulator

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value of movements array

const maximum = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);

console.log(maximum);

// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// methods can only be joined if the preceding one returns an array
// PIPELINE

console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// const calcAverageHumanAge = dogs => {
//   const humanAges = dogs.map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4));
//   const onlyAdultDogs = humanAges.filter(age => age >= 18);
//   console.log(onlyAdultDogs);
//   // const average =
//   //   onlyAdultDogs.reduce((acc, cur) => acc + cur, 0) / onlyAdultDogs.length;
//   const average = onlyAdultDogs.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );
//   console.log(average);
// };

const calcAverageHumanAge = dogs =>
  dogs
    .map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// FIND method: find element of array based on condition
// only returns first element of array

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const account2 of accounts) {
  if (account2.owner === 'Jessica Davis') {
    console.log(account2);
  }
}

*/

// SOME METHOD

// EQUALITY
console.log(movements);
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY METHOD -> every element returns true

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // only goes 1 level deep when flattening

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1)); // one level
console.log(arrDeep.flat(2)); // two levels

// FLATMAP

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//chained
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// FLATMAP -> flat and map in one method. Can only go one level deep!

const overallBalanceFlatmap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceFlatmap);

// SORT strings

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // mutates array

// SORT Numbers --> by default sorts only strings
// console.log(movements.sort()); // does NOT work

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// ASCENDING
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// simplified
movements.sort((a, b) => a - b);
console.log(movements);
// DESCENDING
movements.sort((a, b) => b - a);
console.log(movements);
