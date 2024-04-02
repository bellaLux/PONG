// Variables ---

// Extracted from HTML/CSS:
const player1 = document.getElementById('p1'); var p1score = document.getElementById('p1score');
var score1 = 0; var score2 = 0;
const player2 = document.getElementById('p2'); var p2score = document.getElementById('p2score');
const ball = document.getElementById('ball')

// Players' window sizing:
var player1Barrier = 50 + 20; var player2Barrier = 1000;
var topBorder = 1; var bottomBorder = 750;

// Config:
const ballStartX = 500, ballStartY = 375; 
const ballStartXSpeed = -3; const ballStartYSpeed = -3;
const playersY = 500; const playerSpeed = 18;

const player1Height = 100; const player2Height = 100;
var player1Y = 375; var player2Y = 375;


// Ball:
const ballDimensions = 30
var ballY = ballStartY; var ballX = ballStartX;
var ballXSpeed = 0;  var ballYSpeed = 0;

//Functions ---

// Keys input:
document.addEventListener(
    "keydown",
    function(event) {
        if (event.key == 'w') {
            if (player1Y - playerSpeed <= topBorder) {player1Y = topBorder}
            else {player1Y -= playerSpeed}

        }
        else if (event.key == 's') {
            if (player1Y + playerSpeed >= bottomBorder - player1Height) {player1Y = bottomBorder - player1Height}
            else {player1Y += playerSpeed;}
            }
        if (event.key == 'i') {
            if (player2Y - playerSpeed <= topBorder) {player2Y = topBorder}
            else {player2Y -= playerSpeed}
            }
        else if (event.key == 'k'){
            if (player2Y + playerSpeed >= bottomBorder - player2Height) {player1Y = bottomBorder - player2Height}
            else {player2Y += playerSpeed;}
        }
        if (event.key == 'p') {window.alert("PAUSE! (sim eu sei q eh feio)")}
    }
  );

// Update Function (tickspeed is 10):
window.onload = function() {
    ballXSpeed = -3; ballYSpeed = -3;

    setInterval(function() {

        if (ballX <= player1Barrier &&
            ballY <= player1Y + player1Height &&
            ballY >= player1Y - (ballDimensions + 1) &&
            ballXSpeed + 10 < 10)
            {ballXSpeed *= -1.1;}

        if (ballX >= player2Barrier - ballDimensions && 
            ballY <= player2Y + player2Height && 
            ballY >= player2Y - (ballDimensions + 1) &&
            ballXSpeed + 10 > 10) 
            {ballXSpeed *= -1.05;}

        if (ballY <= topBorder) {ballYSpeed *= -1}; if (ballY >= bottomBorder - 20) {ballYSpeed *= -1}

        if (ballX < player1Barrier - (ballDimensions * 2)) {
            ballX = ballStartX; ballY = ballStartY;
            ballXSpeed = ballStartXSpeed; ballYSpeed = ballStartYSpeed;

            player1Y = playersY; player2Y = playersY;
            score1 ++;
        }
        if (ballX > player2Barrier + ballDimensions) {
            ballX = ballStartX; ballY = ballStartY;
            ballXSpeed = ballStartXSpeed; ballYSpeed = ballStartYSpeed;

            player1Y = playersY; player2Y = playersY;
            score2 ++;
        }


        ballX += ballXSpeed; ballY += ballYSpeed;
        p1score.innerHTML = score2; p2score.innerHTML = score1;

        player1.style.top = player1Y + "px"; player2.style.top = player2Y + "px";
        ball.style.left = ballX + 'px'; ball.style.top = ballY + 'px';
        }, 10
    )
}