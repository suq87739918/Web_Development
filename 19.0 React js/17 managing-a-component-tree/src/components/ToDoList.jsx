import React from "react";

function ToDoList(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.content}</li>
    </div>
  );
}

export default ToDoList;

// import React, { useState } from "react";

// function ToDoList(props) {
//   const [condition, setCondition] = useState(false);

//   function handleClick() {
//     setCondition((prevCondition) => {
//       return !condition;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={condition ? { textDecoration: "line-through" } : null}>
//         {props.content}
//       </li>
//     </div>
//   );
// }

// export default ToDoList;
