import React, { useEffect } from "react";
import { useCart } from "../Context/cartProvider";

import { formatUSD } from '../Context/format';

import CartItem from "./CartItem";

export default function RenderCart() {
  const { removeItemInCart, cartItems, clearCart } = useCart()
  const [price, setPrice] = React.useState(0);

  const cartElements = cartItems.map((item) => {
   
    return (
      <CartItem key={item.id} item={item} handleRemove={() => removeItemInCart(item.id)}/>
    )
  })

  useEffect(() => {
    const cartTotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setPrice(formatUSD(cartTotal));
  }, [cartItems]);

  return (
    <div>
      {cartItems.length > 0 ? cartElements : <h3>nothing in cart</h3>}
      {cartItems.length > 0 && <p>Subtotal: {price}</p>}
      <button onClick={clearCart}>clear cart</button>
    </div>
  );
}
