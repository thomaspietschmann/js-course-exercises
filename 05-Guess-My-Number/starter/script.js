'use strict';

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 100;
const numberInput = document.querySelector(".guess");
// console.log(document.querySelector(".guess").value);

const button = document.querySelector(".check");
button.addEventListener("click", () => console.log(numberInput.value));
