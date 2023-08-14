import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.changeHandler} type="text" value={props.value} />
      <button onClick={props.itemHandler}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
