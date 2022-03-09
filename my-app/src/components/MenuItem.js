import React from "react";

export default function menuItem({ menuItem, onClick}) {
  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="menu-item" onClick={() => onClick()}>
      <div className="menu-item-header">
        <h4>{menuItem.name}</h4>
        <p>{dollarUS.format(menuItem.price)}</p>
      </div>

      <p> {menuItem.description}</p>
    </div>
  );
}
