import React from "react";
import Form from "./Form";
import Registed from "./Registed";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      {/* {userIsRegistered ? <Form /> : <Registed />} */}
    </div>
  );
}

export default App;
