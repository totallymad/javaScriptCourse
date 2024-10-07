'use strict';

// получение элементов
const player0El = document.querySelector('.player--0'),
    player1El = document.querySelector('.player--1'),
    score0El = document.querySelector('#score--0'),
    score1El = document.getElementById('score--1'),
    current0El = document.getElementById('current--0'),
    current1El = document.getElementById('current--1'),
    diceEl = document.querySelector('.dice'),
    btnNew = document.querySelector('.btn--new'),
    btnRoll = document.querySelector('.btn--roll'),
    btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//начальные положения
const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// бросок кубика
btnRoll.addEventListener('click', () => {

    if (playing) {
        //1. бросок кубика 
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);

        //2. отображение броска
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. если выброшена 1

        if (dice !== 1) {
            // добавить к текущему счёту
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // переключиться на другого игрока
            switchPlayer();
        }
    }

})

btnHold.addEventListener('click', () => {
    if (playing) {
        //1 Добаить текущий счёт
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2 Проверить >= 100
        if (scores[activePlayer] >= 100) {
            // Игра закончена
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.rem('player--active');

        } else {
            //переключение на другого игрока
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);