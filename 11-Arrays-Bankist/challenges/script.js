'use strict';

console.log("Let's go!");
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

const eatsEnough = function (dog) {
  if (dog.curFood <= dog.recommendedFood * 0.9) {
    console.log('Dog is not eating enough');
  } else if (dog.curFood >= dog.recommendedFood * 1.1) {
    console.log('Dog is eating too much');
  } else {
    console.log('Food is all fine');
  }
};
eatsEnough(sarahsDog);

const ownersEatTooMuch = () => {
  const owners = dogs
    .filter(dog => dog.curFood >= dog.recommendedFood * 1.1)
    .map(dog => dog.owners)
    .flat();
  logFoodString(owners, 'much');
};

const ownersEatTooLittle = () => {
  const owners = dogs
    .filter(dog => dog.curFood <= dog.recommendedFood * 0.9)
    .map(dog => dog.owners)
    .flat();
  logFoodString(owners, 'little');
};

const logFoodString = (owners, result) => {
  console.log(`${owners.flat().join(' and ')}'s dogs eat too ${result}.`);
};

ownersEatTooLittle(dogs);
ownersEatTooMuch(dogs);

const checkCorrectAmount = dog =>
  dog.curFood <= dog.recommendedFood * 1.1 &&
  dog.curFood >= dog.recommendedFood * 0.9;

console.log(dogs.some(checkCorrectAmount));

const exactAmount = dogs =>
  dogs.some(dog => dog.curFood === dog.recommendedFood);

console.log(exactAmount(dogs));

console.log(dogs.filter(checkCorrectAmount));

console.log(dogs);

// const compare = function (a, b) {
//   if (a.recommendedFood < b.recommendedFood) {
//     return -1;
//   }
//   if (a.recommendedFood < b.recommendedFood) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// const sortedDogs = dogs.slice().sort(compare);
// console.log(sortedDogs);

const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
