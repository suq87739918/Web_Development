"use strict";

//I want the output is Hello, Tobias

// var input = prompt("Your name");
// alert(
//   "Hello " + input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
// );

function lifeInWeeks(age) {
  var inputAge = prompt("your age");
  var monthLeft = 100 * 12 - inputAge * 12;
  var weekLeft = 100 * 52 - inputAge * 52;
  var dayLeft = 100 * 365 - inputAge * 365;
  alert(
    `You have ${dayLeft} days, ${weekLeft} weeks, and ${monthLeft} months left.`
  );
}
lifeInWeeks();
