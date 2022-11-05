
// Dice 1
var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var leftDiceSelect = document.querySelector(".img1");

leftDiceSelect.setAttribute("src", randomDiceImage1);


// Dice 2
var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var rightDiceSelect = document.querySelector(".img2");

rightDiceSelect.setAttribute("src", randomDiceImage2);


// if Player 1 wins

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
// if Player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
// if Draw
else {
    document.querySelector("h1").innerHTML = "Draw!"
}