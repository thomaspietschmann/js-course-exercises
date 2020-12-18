'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1986) {
      var millennial = true; // function scoped
      // Creating new variable with same name as outer scope's variable
      const firstName = "Steven";
      // reassigning outer scope's variable
      output = "NEW OUTPUT";
      const str = `Oh, and you're a millennial, ${firstName}`; // Block scoped
      console.log(str);

      function add(a, b) {
        return a + b;
      }


    }
    console.log(millennial);
    // console.log(str); // error
    // add(2, 3); // error
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Thomas";
calcAge(1982);
