import { createContext, useContext, useReducer } from "react";
import React from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

export default function Context({ children }) {

    const cartItems = []
    const [state, dispatch] = useReducer(cartReducer, {cartItems})
  
    

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => {
    return useContext(Cart);
  };
