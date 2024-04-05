'use strict';

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');

let scores = [0,0];

let scorePlayer0 = Number(document.querySelector('#score--0').textContent);
let scorePlayer1 = Number(document.querySelector('#score--1').textContent);


let currScorePlayer0 = Number(document.querySelector('#current--0').textContent);
let currScorePlayer1 = Number(document.querySelector('#current--1').textContent);
let currScore = 0;
let activePlayer = 0
let isHolding = false;


function rollDice(){
    let randomDice = Math.floor((Math.random() * 6) + 1);
    let dice = document.querySelector('.dice');
    dice.src = `dice-${randomDice}.png`;
    dice.removeAttribute("hidden");
    // -------------------

    if (randomDice !== 1) {
        currScore += randomDice;
        document.querySelector(`#current--${activePlayer}`).textContent = currScore;
        scores[`${activePlayer}`] = currScore;
    } else {
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currScore = 0;
        switchPlayer();
    }
}

function switchPlayer(){
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

function holdScore(){
    let finalScore = Number(document.querySelector(`#score--${activePlayer}`).textContent) + scores[`${activePlayer}`];
    document.querySelector(`#score--${activePlayer}`).textContent = finalScore;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currScore = 0;
    scores[`${activePlayer}`] = 0;

    if (finalScore >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`#name--${activePlayer}`).textContent = `YOU WIN 🎉`;
        btnRoll.style.visibility = "hidden";
        btnHold.style.visibility = "hidden";
    }
    switchPlayer();
}

function newGame(){
    location.reload();
}

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);