"use strict";

const BMICalc = function (weight, height) {
  const BMI = weight / (height * height);
  return BMI;
};

const inputInfo = prompt("请输入你的体重和身高，用逗号分隔");

const infoParts = inputInfo.split(",");

if (infoParts.length === 2) {
  const weight = parseFloat(infoParts[0]);
  const height = parseFloat(infoParts[1]);
  const BMI = Math.floor(BMICalc(weight, height));

  if (
    !isNaN(weight) &&
    !isNaN(height) &&
    weight > 0 &&
    height > 0 &&
    BMI < 18.5
  ) {
    alert(`Your BMI is ${BMI}, so you are underweight.`);
  } else if (
    !isNaN(weight) &&
    !isNaN(height) &&
    weight > 0 &&
    height > 0 &&
    BMI >= 18.5 &&
    BMI < 24.9
  ) {
    alert(`Your BMI is ${BMI}, so you have a normal weight.`);
  }
} else {
  alert(`Your BMI is ${BMI}, so you are overweight.`);
}
