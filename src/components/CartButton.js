import React from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";

import { useCart } from "../Context/cartProvider";

function CartButton(props) {
  const { cartItems } = useCart()

  const cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="cart-button-container" >
    <div className="cart-button" onClick={props.onClick}>
      <BsCart4 size="30px" />
    </div>
    {cartItems.length > 0 && (
        <Badge pill bg="light" text="dark">
          {cartQuantity}
        </Badge>
      )}
    </div>
  );
}

export default CartButton;
