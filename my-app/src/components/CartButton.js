import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'

import { CartState } from "../Context/Context";

function CartButton(props) {
    const { state: { cartItems } } = CartState()

  return (
    <div className='cart-button' onClick={props.onClick}>
        <BsFillCartFill size="30px"/>
        <Badge pill bg="light" text="dark">{cartItems.length}</Badge>
    </div>
  )
}

export default CartButton