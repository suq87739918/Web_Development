"use strict";

const BMICalc = function (weight, height) {
  const BMI = weight / (height * height);
  return BMI;
};

// 提示用户输入他们的体重和身高，用逗号分隔。
const inputInfo = prompt("请输入你的体重和身高，用逗号分隔");

// 把用户输入的字符串按照逗号分割，得到体重和身高的字符串数组。
const infoParts = inputInfo.split(",");

// 如果用户输入的格式正确，infoParts 应该有两个元素。
if (infoParts.length === 2) {
  // 解析输入的体重和身高为数字。
  const weight = parseFloat(infoParts[0]);
  const height = parseFloat(infoParts[1]);

  // 计算 BMI 并显示结果。
  if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
    const BMI = Math.floor(BMICalc(weight, height));
    alert(`你的BMI是${BMI}`);
  } else {
    alert("你的输入不正确，请输入两个正数，用逗号分隔。");
  }
} else {
  alert("你的输入不正确，请输入两个数值，用逗号分隔。");
}
