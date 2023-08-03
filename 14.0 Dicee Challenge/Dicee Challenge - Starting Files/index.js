"use strict";

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Generate the name of the dice image file based on the random number
let generatedImageName1 = "dice" + randomNumber1 + ".png";
let generatedImageName2 = "dice" + randomNumber2 + ".png";

// Select the img element and change its source to the new randomly generated source
let newSrc1 = "./images/" + generatedImageName1;
let newSrc2 = "./images/" + generatedImageName2;

let image1 = document.querySelector(".img1").setAttribute("src", newSrc1);
let image2 = document.querySelector(".img2").setAttribute("src", newSrc2);

let hiValue = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  hiValue.innerHTML = "DRAW!!!";
} else if (randomNumber1 > randomNumber2) {
  hiValue.innerHTML = "🚩 Player 1 Wins";
} else {
  hiValue.innerHTML = "Player 2 Wins 🚩";
}
