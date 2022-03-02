import React, { useEffect } from 'react'
import { CartState } from "../Context/Context";

export default function RenderCart() {
    const { dispatch, state: { cartItems } } = CartState()
    const [price, setPrice] = React.useState(0)
    

    const cartElements = cartItems.map(item => {
        function handleRemove(){
            dispatch({
                type:'REMOVE_FROM_CART',
                payload: item
            })
    
        }
        
        
        return (
            <div className='cart-item'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => handleRemove()}>Remove</button>
            </div>
        )
    })

    useEffect(() => {
        setPrice(cartItems.reduce((acc, curr) => acc + curr.price, 0));
    }, [cartItems])

  return (
    <div>
        {cartItems.length > 0 ? cartElements : <h3>nothing in cart</h3>}
        {cartItems.length > 0 && price}
        
    </div>
  )
}
