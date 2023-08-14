import React from "react";

const date = new Date();
const currHour = date.getHours();

const morningStyle = {
  color: "red",
};

const afternoonStyle = {
  color: "yellow",
};

const nightStyle = {
  color: "blue",
};

// 定义一个组件
function ReactStylingPractice() {
  if (currHour > 0 && currHour < 12) {
    return <h1 style={morningStyle}>Good Morning!</h1>;
  } else if (currHour > 12 && currHour < 18) {
    return <h1 style={afternoonStyle}>Good Afternoon!</h1>;
  } else {
    return <h1 style={nightStyle}>Good Night!</h1>;
  }
}

export default ReactStylingPractice;
