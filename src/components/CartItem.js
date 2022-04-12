import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

import { formatUSD } from '../Context/format';


export default function CartItem({ item, handleRemove }) {  
        return (
          <div className="cart-item">
            <div className="cart-item-header">
              <h4><span>{item.quantity}</span> {item.name}</h4>
              <FaTrashAlt onClick={() => handleRemove(item.id)} />
            </div>
            
            {item.choice && (
              <ul>
                <li>{item.choice} </li>
                <li>{item.spice}</li>
                <li>{item.rice}</li>
              </ul>
            )}
            <p className="price">{formatUSD(item.price)}</p>
          </div>
        );
}