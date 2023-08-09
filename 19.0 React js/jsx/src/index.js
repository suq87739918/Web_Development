import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
//for each render(), only one box is allowed, like here, only one <div> is allowed
root.render(
  /*
  <div>
    <p className="firstP" contentEditable="true" spellCheck="false">
      Created by {name}!
    </p>
    <p>copyright {year}</p>
  </div>
  */
  <div>
    <div>
      <img className="food-img" src={img + "?grayscale"}></img>
    </div>
  </div>
);
