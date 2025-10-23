'use strict';

/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if (!guess) {
        //  document.querySelector('.message').textContent = '⛔No number!'
        displayMessage('⛔No number!');
    } // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent = '🎉Correct Number!';
        displayMessage('🎉Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈Too high!' : '📉Too low!';
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥You lost the game!';
            displayMessage('💥You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // // When guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } // When guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// game reset functionality
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
*/

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
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
});
