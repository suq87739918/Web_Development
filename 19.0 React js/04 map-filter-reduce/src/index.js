var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filterNumber = numbers.filter(function (num) {
  return num > 10;
});
console.log(filterNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

let reduceNumber = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(reduceNumber);

//Find - find the first item that matches from an array.

const findNumber = numbers.find(function (num) {
  return num > 10;
}); //find() method will loop through the numbers array and return the first element that > 10
console.log(findNumber);

//FindIndex - find the index of the first item that matches.

const findIndexNumber = numbers.findIndex(function (num) {
  return num > 10;
}); //find() method will loop through the numbers array and return the first element index that > 10
console.log(findIndexNumber);
