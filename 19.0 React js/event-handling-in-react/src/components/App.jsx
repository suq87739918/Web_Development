import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);

  function buttonClicked() {
    setTitle("Submitted");
  }

  function handlerMouseOver() {
    setMouseOver(true);
  }

  function HandlerMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={buttonClicked}
        onMouseOver={handlerMouseOver}
        onMouseOut={HandlerMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
