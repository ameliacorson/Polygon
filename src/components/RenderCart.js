import React, { useEffect } from "react";
import { useCart } from "../Context/cartProvider";

import { BsCartX } from "react-icons/bs"

import { formatUSD } from '../Context/format';

import CartItem from "./CartItem";

export default function RenderCart({ closeCart }) {
  const { removeItemInCart, cartItems, clearCart } = useCart()
  const [price, setPrice] = React.useState(0);

  function clearItemsCloseCart() {
    closeCart()
    clearCart()
  }

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
    <div className="render-cart">
      {cartItems.length > 0 && <button className="clear-cart-btn" onClick={clearItemsCloseCart}> <BsCartX></BsCartX> clear cart</button>}
      {cartItems.length > 0 ? cartElements : <h4>nothing in cart</h4>}
      {cartItems.length > 0 && <p className="subtotal">Subtotal: {price}</p>}
      
    </div>
  );
}
