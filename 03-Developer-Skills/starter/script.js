// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "Celsius",
    // C) fix bug
    value: Number(prompt("Degrees celsius: "))
  }

  // B) find error
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;

}

// A) Identify bug
console.log(measureKelvin());
*/

// const temps = [17, 21, 23];
const temps = [12, 5, -5, 0, 4];
console.log(temps.join("..."));
let outputString = "...";

for (let i = 0; i < temps.length; i++) {
  outputString = outputString + `the weather on day ${i+1} is ${temps[i]}...`;
};
console.log(outputString);
