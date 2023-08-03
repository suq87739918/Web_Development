"use strict";

let initBottle = 99;
const bottleSong = function (bottle) {
  while (bottle > 0) {
    console.log(
      `${bottle === 0 ? "No more" : bottle} bottles of beer on the wall, ${
        bottle === 0 ? "No more" : bottle
      } bottles of beer, take 1 down, pass it around, ${
        bottle - 1 === 0 ? "No more" : bottle - 1
      } bottles of beer on the wall`
    );
    bottle--;
    if (bottle === 0) {
      console.log(
        `No more bottles of bear on the wall, go to store to buy more, 99 bottles on the wall`
      );
    }
  }
};
bottleSong(99);
