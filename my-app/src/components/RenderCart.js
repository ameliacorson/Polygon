import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { useCart } from "../helpers/cartProvider";
import { formatUSD } from "../helpers/format";

export default function RenderCart() {
  const { cartItems, removeItemInCart } = useCart()
  const [price, setPrice] = React.useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
    setPrice(total);
  }, [cartItems]);


  const handleRemoveItem = (itemCartIndex) => {
    removeItemInCart(itemCartIndex)
  }

  return (
    <div>
      {cartItems.length > 0 ? cartItems.map((item, index) => (
        <CartItem item={item} handleRemove={() => handleRemoveItem(index)} key={index} />
      )) : <h3>nothing in cart</h3>}
      {cartItems.length > 0 && <p>Subtotal: {formatUSD(price)}</p>}
    </div>
  );
}


function CartItem({ item, handleRemove }) {
  const itemOptions = [item.choice.name, item.spicy.name, item.rice.name]
    .filter(option => !!option && option !== "None");

  return (
    <div className="cart-item">
      <div className="cart-item-header">
        <h4>{item.name}</h4>
        <FaTrashAlt onClick={() => handleRemove()} />
      </div>
      <p>{formatUSD(item.totalPrice)}</p>
      <p>{item.description}</p>
      {itemOptions.length && (
        <ul>
          {itemOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  )
}