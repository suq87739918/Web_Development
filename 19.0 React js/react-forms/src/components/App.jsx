import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function inputName(event) {
    setName(event.target.value);
  }

  function handleClicked(event) {
    setHeadingText(name);
    event.preventDefault();
    //这个会让<form>不再自动刷新
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClicked}>
        {/* <form>有default设置会自动刷新来完成get/post request */}
        <input
          onChange={inputName}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
