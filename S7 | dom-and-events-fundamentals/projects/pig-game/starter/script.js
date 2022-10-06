'use strict';

// buttons
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRollDice = document.querySelector('.btn--roll');

//sections
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');

// scores
const currentPlayerScores = document.querySelectorAll('current-score');
const playerOneScoreEl = document.getElementById('score--0');
const playerTwoScoreEl = document.getElementById('score--1');
const currentPlayerOneScore = document.getElementById('current--0');
const currentPlayerTwoScore = document.getElementById('current--1');
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;

// misc
const diceImage = document.querySelector('.dice');
let isNewGame = false;
let activePlayer = 1;

function switchPlayer() {
  //reset current score
  playerOneCurrentScore = 0;
  playerTwoCurrentScore = 0;
  currentPlayerOneScore.textContent = playerOneCurrentScore;
  currentPlayerTwoScore.textContent = playerTwoCurrentScore;

  if (isNewGame) activePlayer = 1;
  else activePlayer = activePlayer === 1 ? 2 : 1;

  setActivePlayerCSS(activePlayer);
}

function setActivePlayerCSS(activePlayer) {
  if (activePlayer === 1) {
    playerTwoSection.classList.remove('player--active');
    playerOneSection.classList.add('player--active');
  } else {
    playerOneSection.classList.remove('player--active');
    playerTwoSection.classList.add('player--active');
  }
}

const rollDice = function rollDice() {
  isNewGame = false;

  let diceNumber = Math.trunc(Math.random() * 6 + 1);
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) setCurrentPlayerScore(activePlayer, diceNumber);

  if (diceNumber === 1) switchPlayer();
};

function setCurrentPlayerScore(player, diceNumber) {
  if (player === 1) {
    playerOneCurrentScore += diceNumber;
    currentPlayerOneScore.textContent = playerOneCurrentScore;
  }
  if (player === 2) {
    playerTwoCurrentScore += diceNumber;
    currentPlayerTwoScore.textContent = playerTwoCurrentScore;
  }
}

const resetGame = function resetBoard() {
  for (let i = 0; i < currentPlayerScores.length; i++) {
    currentPlayerScores[i].textContent = 0;
    playerScores[i].textContent = 0;
  }

  playerOneScore = 0;
  playerOneScoreEl.textContent = playerOneScore;
  playerTwoScore = 0;
  playerTwoScoreEl.textContent = playerTwoScore;

  btnHold.disabled = false;
  btnRollDice.disabled = false;
  playerOneSection.classList.remove('player--winner');
  playerTwoSection.classList.remove('player--winner');
  diceImage.classList.add('hidden');

  isNewGame = true;
  switchPlayer();
};

const holdScore = function holdScore() {
  if (activePlayer === 1) {
    playerOneScore += playerOneCurrentScore;
    playerOneScoreEl.textContent = playerOneScore;
    switchPlayer();
  } else {
    playerTwoScore += playerTwoCurrentScore;
    playerTwoScoreEl.textContent = playerTwoScore;
    switchPlayer();
  }

  if (playerOneScoreEl.textContent >= 10) {
    playerOneSection.classList.add('player--winner');
    winCondition();
  }
  if (playerTwoScoreEl.textContent >= 10) {
    playerTwoSection.classList.add('player--winner');
    winCondition();
  }
};

function winCondition() {
  btnHold.disabled = true;
  btnRollDice.disabled = true;
}

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNewGame.addEventListener('click', resetGame);
