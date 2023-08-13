import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  //useState() will take 2 elements, the first element is the input, and the second is a function

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
