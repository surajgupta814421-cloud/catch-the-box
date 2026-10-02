const gameArea = document.getElementById("game-area");

const box = document.getElementById("box");

const scoreDisplay = document.getElementById("score");

const timeDisplay = document.getElementById("time");

const startButton = document.getElementById("start-btn");

const message = document.getElementById("message");


let score = 0;

let timeLeft = 30;

let gameRunning = false;

let timer;


function moveBox() {

    const maxX = gameArea.clientWidth - box.offsetWidth;

    const maxY = gameArea.clientHeight - box.offsetHeight;


    const randomX = Math.random() * maxX;

    const randomY = Math.random() * maxY;


    box.style.left = randomX + "px";

    box.style.top = randomY + "px";
}


function startGame() {

    score = 0;

    timeLeft = 30;

    gameRunning = true;


    scoreDisplay.textContent = score;

    timeDisplay.textContent = timeLeft;


    box.style.display = "block";

    startButton.disabled = true;

    message.textContent = "Catch the box!";


    moveBox();


    timer = setInterval(function () {

        timeLeft--;

        timeDisplay.textContent = timeLeft;


        if (timeLeft <= 0) {

            endGame();

        }

    }, 1000);
}


function endGame() {

    gameRunning = false;

    clearInterval(timer);


    box.style.display = "none";

    startButton.disabled = false;

    message.textContent =
        "Game Over! Your score was " + score;

}


box.addEventListener("click", function () {

    if (!gameRunning) {
        return;
    }


    score++;

    scoreDisplay.textContent = score;


    moveBox();

});


startButton.addEventListener("click", function () {

    startGame();

});