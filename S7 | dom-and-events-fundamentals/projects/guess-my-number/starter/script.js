'use strict';

// generate secret number
function generateSecretNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

let secret = generateSecretNumber();
let score = 20;
let highscore = 0;

// add event listeners
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score === 1) {
    displayMessage('Game over! ❌');
    setScore(0);
    return;
  }

  if (!guess) {
    displayMessage('No Number! ⛔️');
  } else if (guess > secret) {
    displayMessage('Too high 📈');
    score--;
    setScore(score);
  } else if (guess < secret) {
    displayMessage('Too low 📉');
    score--;
    setScore(score);
  } else if (guess === secret) {
    displayMessage('Correct! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347'; //update css
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

// coding challenge: reset game
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Starting guessing...');
  score = 20;
  setScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secret = generateSecretNumber();
});

// updating css,
//  use the ('body').style on query selector
//  css properties use camelCase in js.
//  the values used (30rem) must be set as strings
