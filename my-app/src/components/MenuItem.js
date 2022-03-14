import React from "react";

import { formatUSD } from '../Context/format';

export default function menuItem({ menuItem, onClick}) {

  return (
    <div className="menu-item" onClick={() => onClick()}>
      <div className="menu-item-header">
        <h4>{menuItem.name}</h4>
        <p className="price">{formatUSD(menuItem.price)}</p>
      </div>

      <p> {menuItem.description}</p>
    </div>
  );
}
