"use strict";

function fibonacciGenerator(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let output = [0, 1];
    while (output.length < n) {
      let length = output.length;
      //let nextNum = output[length - 1] + output[length - 2];
      output.push(output[length - 1] + output[length - 2]);
    }
    return output;
  }
}

console.log(fibonacciGenerator(10)); // [0, 1, 1]
