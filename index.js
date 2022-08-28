var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);


// to declare the winner
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 WINS";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="🚩Its a DRAW🚩";
}
else{
  document.querySelector("h1").innerHTML="Player 2 WINS🚩";
}
