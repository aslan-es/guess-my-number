'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

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
        // document.querySelector('.message').textContent = 'No Number! ⛔';
        displayMessage('No Number! ⛔');
    } else if (guess === secrectNumber) {
        // document.querySelector('.message').textContent = 'Correct Number 🎉';
        displayMessage('Correct Number 🎉');
        document.querySelector('.number').textContent = secrectNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // Refactoring our code
    else if (guess !== secrectNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secrectNumber ? 'Too High 📈' : 'Too Low 📉';
            displayMessage(guess > secrectNumber ? 'Too High 📈' : 'Too Low 📉');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lose the game 💣💥';
            displayMessage('You lose the game 💣💥');
            document.querySelector('.score').textContent = 0;
        }
    }

    /*else if (guess > secrectNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High 📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game 💣💥';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secrectNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game 💣💥';
            document.querySelector('.score').textContent = 0;
        }
 
    }*/
});



document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secrectNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀