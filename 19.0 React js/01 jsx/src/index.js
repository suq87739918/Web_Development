import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactStylingPractice from "./conponents/ReactStylingPractice";
import pi, { doublePi, triplePi } from "./conponents/OrderedList";
import { add, multiply, subtract, divide } from "./conponents/MathOperations";

/*
const name = "Tobias";
function myLuckyNum() {
  let num = Math.floor(Math.random() * 10);
  return num;
}
//to get the date info
const currDate = new Date();
const year = currDate.getFullYear();
//this url is used to generate a random img
const img = "https://picsum.photos/200";
*/

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid green",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//for each render(), only one box is allowed, like here, only one <div> is allowed
root.render(
  <div>
    <div>
      <h1 style={customStyle}>Hello World!</h1>
      <ReactStylingPractice />
      <ol>
        <li>{add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{subtract(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ol>
    </div>
  </div>
);
