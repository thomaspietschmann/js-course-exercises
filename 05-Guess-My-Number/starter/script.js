'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret number is ${secretNumber}`);

const guessInput = document.querySelector(".guess");
let score = 20; // state variable
const button = document.querySelector(".check");
let highScore = 0;

button.addEventListener("click", function () {
  const guess = Number((guessInput.value));
  console.log(guess);

  if (!guess) {
    displayMessage("No number...");
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(`Guess is too ${guess < secretNumber ? "low" : "high"}`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
}


function resetGame() {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  console.log(`Secret number is ${secretNumber}`);
}

document.querySelector(".again").addEventListener("click", resetGame);
