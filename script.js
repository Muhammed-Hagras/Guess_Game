'use strict';

// let mySecretNumber = Math.trunc(Math.random() * 20);

// //Elements
// let checkBtn = document.querySelector('.check');
// let againBtn = document.querySelector('.again');
// let messageElement = document.querySelector('.message');
// let numberElement = document.querySelector('.number');
// let myBody = document.querySelector('body');

// const checkFunHandler = function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess || guess == 0) {
//     messageElement.textContent = 'No umber 🙄';
//   } else if (guess < mySecretNumber) {
//     messageElement.textContent = 'To low 🙃';
//   } else if (guess > mySecretNumber) {
//     messageElement.textContent = 'To high 🙃';
//   } else if (guess == mySecretNumber) {
//     messageElement.textContent = 'Congrats ㊗️';
//     myBody.style.backgroundColor = '#60b347';
//     numberElement.textContent = mySecretNumber;
//     numberElement.style.width = '30rem';
//   } else {
//     messageElement.textContent = 'Something goes wrong 🤢';
//   }
// };

// const againFunHandler = function () {
//   console.log('hey again');
//   mySecretNumber = 0;
//   mySecretNumber = Math.trunc(Math.random() * 20);
//   myBody.style.backgroundColor = '#222';
//   numberElement.style.width = '15rem';
// };

// checkBtn.addEventListener('click', checkFunHandler);
// againBtn.addEventListener('click', againFunHandler);

const checckBtn = document.querySelector('.check');
let message = document.querySelector('.message').textContent;
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

const checkFunHandler = function () {
  const guessInputVal = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guessInputVal) {
    document.querySelector('.message').textContent = 'Please enter a number⛔';

    //When player wins
  } else if (guessInputVal === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number...! 🧑‍✈️';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the input is too high
  } else if (guessInputVal > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'Too high 😮';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😷';
      document.querySelector('.score').textContent = 0;
    }

    //When the input is too low
  } else if (guessInputVal < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'Too Low 😮';
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
