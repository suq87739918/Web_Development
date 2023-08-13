import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];
const squareNumbers = numbers.map((x) => x * x);
console.log(squareNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const doubleNumbers = numbers.map((x) => 2 * x);
console.log(doubleNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const filterNumbers = numbers.filter((x) => x < 10);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const reduceNumbers = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(reduceNumbers);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const findNumbers = numbers.find((x) => x > 10);
console.log(findNumbers);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const findIndexNumbers = numbers.findIndex((x) => x > 10);
console.log(findIndexNumbers);
