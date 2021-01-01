
// var randomNumber1 = Math.floor(Math.random() * 6);
// this will generate random number ranging from 0 to 5.99999
// and
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// this will generate random number ranging from 1 to 6

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // output is random number from 1 to 6
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //output is random images from dice1 to dice6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor((Math.random() * 6 + 1));
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "✔ Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins ✔";
}
else {
  document.querySelector("h1").innerHTML = "Draw, try again!";
}
