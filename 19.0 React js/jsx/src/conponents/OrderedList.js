import React from "react";

const pi = 3.1415926;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; //default的值在被调用时可以不用使用匹配的名字，被调用时会自动找default的值
export { doublePi, triplePi }; //非default的值，需要准确使用名称
