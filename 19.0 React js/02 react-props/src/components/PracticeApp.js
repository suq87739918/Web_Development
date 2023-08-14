import React from "react";
import Avatar from "./Avatar";
import PersonInfo from "./PersonInfo";

function PracticeApp(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <PersonInfo info={props.tel} />
          <PersonInfo info={props.email} />
        </div>
      </div>
    </div>
  );
}

export default PracticeApp;
