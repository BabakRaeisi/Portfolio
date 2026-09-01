const canvas = document.querySelector('.pongCanvas');
const context = canvas.getContext('2d');

// Double the resolution
canvas.width = 1200;
canvas.height = 800;
canvas.style.width = '600px';
canvas.style.height = '400px';

// Canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Paddle dimensions
const paddleWidth = 20;
const paddleHeight = 200;

// Ball dimensions and properties
const ballRadius = 20;
let ballX = canvasWidth / 4; // Start away from the center
let ballY = canvasHeight / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;

// Paddle position
let paddleY = (canvasHeight - paddleHeight) / 2;
const paddleSpeed = 8;

// User control
let upPressed = false;
let downPressed = false;
let wPressed = false;
let sPressed = false;

// Game state
let score = 0;
let gameRunning = false;
let crossedCenter = false; // Flag to track if the ball has crossed the center

// Draw the paddle
function drawPaddle() {
    context.fillStyle = 'white';
    context.fillRect(canvasWidth / 2 - paddleWidth / 2, paddleY, paddleWidth, paddleHeight);
}

// Draw the ball
function drawBall() {
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
}

// Update score on the page
function updateScore() {
    document.querySelector('.scoreDisplay').textContent = `Score: ${score}`;
}

// Move the paddle
function movePaddle() {
    if ((upPressed || wPressed) && paddleY > 0) {
        paddleY -= paddleSpeed;
    } else if ((downPressed || sPressed) && paddleY < canvasHeight - paddleHeight) {
        paddleY += paddleSpeed;
    }
}

// Move the ball
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom walls
    if (ballY + ballRadius > canvasHeight || ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddle
    if (
        ballX + ballRadius > canvasWidth / 2 - paddleWidth / 2 &&
        ballX - ballRadius < canvasWidth / 2 + paddleWidth / 2 &&
        ballY + ballRadius > paddleY &&
        ballY - ballRadius < paddleY + paddleHeight
    ) {
        endGame();
    }

    // Ball crosses the center
    if (ballSpeedX > 0 && ballX > canvasWidth / 2) {
        if (!crossedCenter) {
            score++;
            updateScore();
            crossedCenter = true;
        }
    } else if (ballSpeedX < 0 && ballX < canvasWidth / 2) {
        if (!crossedCenter) {
            score++;
            updateScore();
            crossedCenter = true;
        }
    } else {
        crossedCenter = false;
    }

    // Ball collision with left and right walls
    if (ballX + ballRadius > canvasWidth || ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }
}

// End game function
function endGame() {
    gameRunning = false;
    document.querySelector('.gameOverScreen').style.display = 'flex';
    document.querySelector('.finalScore').textContent = `Your final score is: ${score}`;
}

// Start game function
function startGame() {
    document.querySelector('.startButton').style.display = 'none';
    document.querySelector('.gameOverScreen').style.display = 'none';
    score = 0;
    updateScore();
    ballX = canvasWidth / 4; // Start away from the center
    ballY = canvasHeight / 2;
    ballSpeedX = 4;
    ballSpeedY = 4;
    paddleY = (canvasHeight - paddleHeight) / 2;
    gameRunning = true;
    gameLoop();
}

// Update game state
function update() {
    if (!gameRunning) return;
    movePaddle();
    moveBall();
}

// Render game elements
function render() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    drawPaddle();
    drawBall();
}

// Game loop
function gameLoop() {
    if (!gameRunning) return;
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Event listeners for user input
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        upPressed = true;
        event.preventDefault();
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
        event.preventDefault();
    } else if (event.key === 'w') {
        wPressed = true;
        event.preventDefault();
    } else if (event.key === 's') {
        sPressed = true;
        event.preventDefault();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    } else if (event.key === 'w') {
        wPressed = false;
    } else if (event.key === 's') {
        sPressed = false;
    }
});

// Start button event listener
document.querySelector('.startButton').addEventListener('click', startGame);

// Initial setup
document.querySelector('.startButton').style.display = 'block';
