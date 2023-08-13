import React from "react";
import Login from "./Login";

let isLoggedIn = false;

// function renderConditonally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const currTime = new Date().getHours();
console.log(currTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
      {currTime > 15 ? <h1>Why are you still working?</h1> : null}
    </div>
  );
}

export default App;
