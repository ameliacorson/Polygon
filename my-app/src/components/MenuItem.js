import React from "react";

export default function menuItem(props) {
  return (
    <div className="menu-item" onClick={props.onclick}>
      <h4>{props.name}</h4>
      <p> {props.description}</p>
      <p></p>
    </div>
  );
}
