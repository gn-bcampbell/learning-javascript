'use strict';

// generate secret number
const secret = Math.floor(Math.random() * 20) + 1;
console.log(secret);

let score = 20;

// add event listeners
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score === 1) {
    document.querySelector('.message').textContent = 'Game over! ❌';
    document.querySelector('.score').textContent = 0;
    return;
  }

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! ⛔️';
  } else if (guess > secret) {
    document.querySelector('.message').textContent = 'Too high 📈';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secret) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secret) {
    document.querySelector('.message').textContent = 'Correct! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347'; //update css
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
  }
});

// coding challenge: reset game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Starting guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

// updating css,
//  use the ('body').style on query selector
//  css properties use camelCase in js.
//  the values used (30rem) must be set as strings
