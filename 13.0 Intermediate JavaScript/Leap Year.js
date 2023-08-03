"use strict";

let year = prompt("The year you wanna check: ");

const leapYearCalc = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `The year ${year} is a leap year`;
  } else {
    return `The year ${year} is not a leap year`;
  }
};

alert(leapYearCalc(year));
