const numberOfButtons = document.querySelectorAll(".drum").length;
//console.log(numberOfButtons);

for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this is used to play the sound in web
    // let playSound = new Audio("./sounds/tom-1.mp3");
    // playSound.play();

    //change the color the the button to white
    //this.style.color = "white";

    //switch method
    const buttonInnerHTML = this.innerHTML;
    makeSounds(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSounds(event.key);
  buttonAnimation(event.key);
});

function makeSounds(key) {
  switch (key) {
    //when case is innerHTML is w
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currKey) {
  var activeButton = document.querySelector("." + currKey); //we are selecting by its class name, so we need the . before the key
  //check if the pressed key has function
  if (activeButton) {
    activeButton.classList.add("pressed");
  }
  //remvoe the added pressed css
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
