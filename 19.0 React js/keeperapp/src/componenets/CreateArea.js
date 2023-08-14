import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handlrClick(event) {
    props.onAdd(note);
    //initialize the create area
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
      //这是ES6的计算属性名称语法。它允许你使用一个变量（在这里是name）作为对象属性的名称。
      //因为name可以是"title"或"content"，这样这段代码可以动态地更新note对象中的"title"或"content"属性。
    });
  }

  return (
    <div>
      <form className="form">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handlrClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
