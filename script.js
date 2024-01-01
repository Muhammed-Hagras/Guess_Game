'use strict';

const checckBtn = document.querySelector('.check');
let message = document.querySelector('.message').textContent;
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;

const checkFunHandler = function () {
  const guessInputVal = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guessInputVal) {
    displayMessage('Please enter a number⛔');

    //When player wins
  } else if (guessInputVal === secretNumber) {
    displayMessage('Correct Number...! 🧑‍✈️');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the input is Wrong
  } else if (guessInputVal !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(
        guessInputVal > secretNumber ? 'Too high 😮' : 'Too Low 😮'
      );
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😷';
      document.querySelector('.score').textContent = 0;
    }
  }
};

checckBtn.addEventListener('click', checkFunHandler);

const checkAgainHandler = function () {
  score = 20;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.again').addEventListener('click', checkAgainHandler);
