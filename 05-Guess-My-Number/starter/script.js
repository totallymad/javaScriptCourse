'use strict';
/* 
document.querySelector('.message').textContent = '🎉 Верное число!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Начни угадывать...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
})

document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  // не ввел число
  if (!guess) {
    displayMessage('🙈 Выберите число!');
    //пользователь выиграл
  } else if (guess === secretNumber) {
    displayMessage('🎉 Верное число!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Неправильный выбор
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '📈 Слишком много!' : '📉 Слишком мало!')
    } else {
      displayMessage('💥 Вы проиграли!')
      document.querySelector('.score').textContent = 0;
    }
  }
})