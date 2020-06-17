var randomNumber1 = Math.floor((Math.random()*6));
var randomNumber2 = Math.floor((Math.random()*6));

var imageArray = ["images/dice1.png",
                  "images/dice2.png",
                  "images/dice3.png",
                  "images/dice4.png",
                  "images/dice5.png",
                  "images/dice6.png"];

var randomImage1 = imageArray[randomNumber1];
var randomImage2 = imageArray[randomNumber2];

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won!";
}

else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
