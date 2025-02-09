const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleWidth = 80, paddleHeight = 10;
let paddleX = (canvas.width - paddleWidth) / 2;
let ballX = Math.random() * (canvas.width - 20);
let ballY = 0, ballRadius = 10, ballSpeed = 2;
let score = 0;

document.addEventListener("mousemove", (event) => {
    let rect = canvas.getBoundingClientRect();
    paddleX = event.clientX - rect.left - paddleWidth / 2;
});

function drawPaddle() {
    ctx.fillStyle = "blue";
    ctx.fillRect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function update() {
    ballY += ballSpeed;
    if (ballY + ballRadius > canvas.height - paddleHeight - 10 && ballX > paddleX && ballX < paddleX + paddleWidth) {
        score++;
        ballY = 0;
        ballX = Math.random() * (canvas.width - 20);
        ballSpeed += 0.2;
    } else if (ballY + ballRadius > canvas.height) {
        alert("Game Over! Your score: " + score);
        document.location(indexedDB, "index.html");
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();
    drawScore();
    update();
    requestAnimationFrame(draw);
}

draw();
