'use strict';

// Constructor functions
// called with "new" operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this! Prefer prototyping
  // this.calcAge = function () {
  //   console.log(2020 - this.birthYear);
  // };
};

const thomas = new Person('Thomas', 1980);
console.log(thomas);
// console.log(thomas.calcAge());

// 1. empty object is created
// 2. function is called, this = new empty object {}
// 3. object is linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2002);
const jack = new Person('Jack', 1978);
console.log(matilda, jack);

console.log(thomas instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

thomas.calcAge();
matilda.calcAge();

console.log(thomas.__proto__); // logs the prototype
console.log(Person.prototype === thomas.__proto__); // true
console.log(Person.prototype.isPrototypeOf(thomas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(thomas.species);
console.log(thomas.hasOwnProperty('firstName')); // true
console.log(thomas.hasOwnProperty('species')); // false

// Prototype chain:
// series of links between objects, linked through prototypes. Similar to scope chain. JS will always look up in the chain when we call a method

console.log(thomas.__proto__);
console.log(thomas.__proto__.__proto__); // Object.prototype (top of chain)
console.log(thomas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor); // points back to Person function
console.dir(Person.prototype.constructor); // points back to Person function

const arr = [1, 2, 3, 3, 3, 5, 5, 1, 4, 5]; // [] === new Array
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // Object

// extend prototype of built in object. NOT a good idea!

Array.prototype.unique = function () {
  return [...new Set(this)].sort();
};

console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`This ${this.make} is now going at ${(this.speed += 10)} km/h!`);
};

Car.prototype.brake = function () {
  console.log(`This ${this.make} is now going at ${(this.speed -= 5)} km/h!`);
};

// Classes ES6
// Classes are "syntactic sugar"
// class expression
// const PersonCl = class {

// }

// 1. Classes are not hoisted. Cannot be used before declared!
// 2. Classes are first-class citizens: Can be passed and returned from functions
// 3. Classes are executed in strict-mode!

// GETTERS and SETTERS = ACCESSOR properties

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter.fullName);

// const account = {
//   owner: 'Thomas',
//   movements: [200, -100, 500],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// static methods

// Array.from(document.querySelectorAll('h1'));
// Array.from // would not work
// from method is attached to the contructor and not to the prototype
// from method is in the "Array namespace"
// Number.parseFloat(12) // method is on the Number constructor

// add static method

// Person.hey = function () {
//   console.log('hey there from Person!');
//   // console.log(this); // entire constructor function
// };

// Person.hey();
// // thomas.hey(); // does not work

// PersonCl.hey();

// // use Object.create to create Classes

// const PersonProto = {
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     // this is NOT a constructor function
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// create object with PersonProto as prototype

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.firstName = 'Steven';
// steven.birthYear = 1981;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto); // true

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1977);
// sarah.calcAge();

// challenge 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`Going at ${(this.speed += 10)} km/h`);
    return this;
  }

  brake() {
    console.log(`Slowing down to at ${(this.speed -= 5)} km/h`);
    return this;
  }

  get speedUS() {
    return Math.trunc(this.speed / 1.6);
  }

  set speedUS(speed) {
    this.speed = Math.trunc(speed * 1.6);
  }
}

// const audi = new Carcl('Audi', 120);
// console.log(audi.speedUS);
// console.log(audi);

// audi.speed = 140;
// audi.brake();
// audi.accelerate();
// audi.speedUS = 53;

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.#charge--;
    this.speed += 20;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }!`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function (chargeTo) {
//   this.charge -= 1;
//   this.speed += 20;
//   console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}!`);
// // };

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 120);

const vw = new EVCl('VW', 120, 56);
vw.chargeBattery(77);
vw.accelerate();

bmw.accelerate();
mercedes.brake();
vw.brake();
console.log(vw);
vw.accelerate().brake().accelerate().chargeBattery(90).accelerate();

console.log(vw.speedUS);

////
// INHERITANCE

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear); // IMPORTANT
//   this.course = course;
// };

// // connection has to be added before adding anymore methods
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName}, I am ${
//       new Date().getFullYear() - this.birthYear
//     } years old and I study ${this.course}.`
//   );
// };

// const mike = new Student('Mike', 2010, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student); // true
// console.log(mike instanceof Person); // true
// console.log(mike instanceof Object); // true

// Student.prototype.constructor = Student;

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } // like initialize

  calcAge() {
    console.log(2020 - this.birthYear);
  } // function will be added to prototype property

  get age() {
    return 2020 - this.birthYear;
  }

  // Setting properties that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // Convention to avoid naming conflict
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // create static method in class
  static hey = function () {
    console.log('hey there from PersonCl!');
  };
}

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`); // work exactly like declaring in class
// };

class StudentCl extends PersonCl {
  // links prototypes
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // constructor function of parent class
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName}, I am ${
        new Date().getFullYear() - this.birthYear
      } years old and I study ${this.course}.`
    );
  }

  calcAge() {
    console.log(
      `I am ${
        new Date().getFullYear() - this.birthYear
      } years old but I feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      } years.`
    );
  }
}

const tom = new StudentCl('Tom P', 1980, 'Everything');
tom.introduce();
tom.calcAge();
console.log(tom);

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(firstName, birthYear) {
    // this is NOT a constructor function
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);

  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName}, I am ${
      new Date().getFullYear() - this.birthYear
    } years old and I study ${this.course}.`
  );
};

const johnny = Object.create(StudentProto);
johnny.init('John Y', 1982, 'IT');
console.log(johnny);
johnny.introduce();
johnny.calcAge();

// Another class example

// 1. public (instance) fields
// 2. private fields
// 3. public method
// 4. private method
// (there are also the corresponding static methods)

class Account {
  // public (instance) fields
  locale = navigator.language; // semicolon makes it public field

  // private (instance) fields
  #movements = []; // not based on input
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface of object (API)

  // 3. public methods / public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    // API
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    // API
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper!');
  }

  // 4. private methods

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Thomas', 'EUR', 1111);

// acc1.#movements.push(25);
acc1.deposit(350);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements()); // convention
Account.helper();
// console.log(acc1.#movements);

// Chaining --> return this from methods!

acc1.deposit(300).deposit(299).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/
