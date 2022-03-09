import { createContext, useContext, useState } from "react";
import React from "react";
import { getItemsInCart, setCartLocalState } from "./cartMethods";


const CartContext = createContext();

export default function CartContextProvider({ children }) {

    const [cartItems, setCartItems] = useState(getItemsInCart())
    
    function setCartAndLocalState(items){
      setCartLocalState(items)
      setCartItems(items)
    }

    function addItemToCart(item){
      setCartAndLocalState([...cartItems, item])
    }

    function removeItemInCart(itemIndex) {
      let items = [...cartItems]
      items.splice(itemIndex, 1);
      setCartAndLocalState(items)
    }
    

  return <CartContext.Provider value={{ cartItems, addItemToCart, removeItemInCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    return useContext(CartContext);
  };
