'use strict';

// Guess My Number
// Goal: simply guess a secret number which is between 1 and 20. In the input field we type a number, click check button and on the right side of page we get a message(Too low, Too high and Correct number). We start with a score set to 20 and after one failed guess it gets decreased by 1. When the number guessed is same as secret number, we will get "Correct Number" message, screen turns to green and Highscore value will set to the value of Score. If we want to play again simply click on Again! button, the page will get reset to initial values except for Highscore value. Highscore value is kept so if we are quicker to guess the number correct in next round, then the high score will get updated(it will become better).

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';

console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    document.querySelector('.score').textContent = score--;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});
