import React from "react";

export default function menuItem(props) {

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

});
  return (
    <div className="menu-item" onClick={props.onclick}>
      <h4>{props.name}</h4>
      <p>{dollarUS.format(props.price)}</p>
      <p> {props.description}</p>
    </div>
  );
}
