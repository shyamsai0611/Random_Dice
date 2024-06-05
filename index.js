var randomnumber1 = Math.floor(Math.random() * 6) + 1; // getting random mun b/w 1 to 6 if not test in console

var randomdiceimage = "dice" + randomnumber1 + ".png"; // dice1.png to dice6.png

var randoimagesource = "images/" + randomdiceimage;// images/dice1.png to images/dice6.png;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randoimagesource);




var randomnumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomimagesource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Play 1 wins!";
}

else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Play 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}