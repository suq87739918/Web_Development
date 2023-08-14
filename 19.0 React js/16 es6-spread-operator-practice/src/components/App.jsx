import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems((prevItems) => [...prevItems, input]);
    setInput("");
    //让输入框变回空白
  }

  function handleChange(event) {
    const newText = event.target.value;
    setInput(newText);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todolist) => {
            return <li>{todolist}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
