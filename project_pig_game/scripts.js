"use strict";

// selecting elements

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1"); // Added this line
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnReset = document.querySelector('.btn--new');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0]; // hold player 0 & player 1
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

const activePlayerColor = document.getElementsByClassName("player");

// rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1. generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        // 3. check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice; // equal currentScore = currentScore + dice
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // 1 add current score to active player's score
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        // score[1] = score[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // 2 check if play's score is >=100
        if (scores[activePlayer] >= 20) {
            // finish the game
            playing = false;
            diceEl.classList.add("hidden");

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            // switch to next player
            switchPlayer();
        }
    }
});

btnReset.addEventListener("click", function () {
    currentScore = 0;
    document.getElementById("current--0").textContent = currentScore;
    document.getElementById("current--1").textContent = currentScore;



    score0El.textContent = 0;
    score1El.textContent = 0;
    console.log(currentScore);
    diceEl.classList.add("hidden");

});