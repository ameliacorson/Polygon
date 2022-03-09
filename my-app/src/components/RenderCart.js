import React, { useEffect } from "react";
import { useCart } from "../Context/cartProvider";


import CartItem from "./CartItem";

export default function RenderCart() {
  const { removeItemInCart, cartItems, clearCart } = useCart()
  const [price, setPrice] = React.useState(0);

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartElements = cartItems.map((item) => {
   
    return (
      <CartItem key={item.id} item={item} handleRemove={() => removeItemInCart(item.id)}/>
    )
  })

  useEffect(() => {
    const cartTotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    setPrice(dollarUS.format(cartTotal));
  }, [cartItems, dollarUS]);

  return (
    <div>
      <button onClick={clearCart}>clear cart</button>
      {cartItems.length > 0 ? cartElements : <h3>nothing in cart</h3>}
      {cartItems.length > 0 && <p>Subtotal: {price}</p>}
    </div>
  );
}
