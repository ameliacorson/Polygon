import React from "react";
import { createContext, useContext } from "react";
import { getItemsInCart, setCartLocalState } from "./cartMethods";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = React.useState(getItemsInCart());

    const setCartAndLocalState = (items) => {
        setCartLocalState(items);
        setCartItems(items)
    }

    const addItemToCart = (item) => {
        setCartAndLocalState([...cartItems, item])
    }

    const removeItemInCart = (itemIndex) => {
        let items = [...cartItems]
        items.splice(itemIndex, 1);
        setCartAndLocalState(items)
    }

    return <CartContext.Provider value={{ cartItems, addItemToCart, removeItemInCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);