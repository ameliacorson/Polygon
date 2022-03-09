import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


export default function CartItem({ item, handleRemove }) {

    console.log(item)
    
    const dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
    
        return (
          <div className="cart-item">
            <div className="cart-item-header">
              <h4>{item.name}</h4>
              <FaTrashAlt onClick={() => handleRemove(item.id)} />
            </div>
            <p>{dollarUS.format(item.price)}</p>
            <p>{item.description}</p>
            {item.choice && (
              <ul>
                <li>{item.choice} </li>
                <li>{item.spice}</li>
                <li>{item.rice}</li>
              </ul>
            )}
          </div>
        );
}