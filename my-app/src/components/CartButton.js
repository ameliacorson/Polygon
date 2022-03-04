import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { useCart } from "../helpers/cartProvider";

function CartButton(props) {
  const {cartItems} = useCart();

  return (
    <div className="cart-button" onClick={props.onClick}>
      <BsFillCartFill size="30px" />
      {cartItems.length > 0 && (
        <Badge pill bg="light" text="dark">
          {cartItems.length.length}
        </Badge>
      )}
    </div>
  );
}

export default CartButton;
