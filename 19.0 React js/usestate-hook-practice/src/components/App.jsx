import { useState } from "react";
import React from "react";

function App() {
  setInterval(updateTime, 1000);

  let currTime = new Date().toLocaleTimeString();
  //console.log(currTime);
  const [time, setTime] = useState(currTime);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
