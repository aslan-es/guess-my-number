'use strict';
let secrectNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;
document.querySelector('.guess').value = '';
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('No Number! ⛔');
    } else if (guess === secrectNumber) {
        displayMessage('Correct Number 🎉');
        document.querySelector('.number').textContent = secrectNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secrectNumber) {
        if (score > 1) {
            displayMessage(guess > secrectNumber ? 'Too High 📈' : 'Too Low 📉');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lose the game 💣💥');
            document.querySelector('.score').textContent = 0;
        }
    }

});



document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secrectNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})

