"use strict";

const whoWillPay = function (names) {
  let generateNumber = Math.floor(Math.random() * names.length);
  let generateName = names[generateNumber];
  console.log(`${generateName} is going to buy lunch today!`);
};
whoWillPay(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
