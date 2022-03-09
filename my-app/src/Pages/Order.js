import React from "react";
import Menu from "../menu.json";
import MenuSection from "../components/MenuSection";
import Popup from "../components/Popup";
import CartButton from "../components/CartButton";
import { Accordion } from "react-bootstrap";

import { useCart } from "../Context/cartProvider";
import Cart from "../components/Cart";

export default function Order() {
  const {appetizers, mains, sides, drinks } = Menu
  const [popupItem, setPopupItem] = React.useState();
  const [cartOpen, setCartOpen] = React.useState(false);
  const { cartItems } = useCart()

  React.useEffect(() => {
    if (popupItem || cartOpen) {
      document.body.style.overflowY = "hidden";
    } else if (!popupItem && !cartOpen) {
      document.body.style.overflowY = "auto";
    }
  }, [popupItem, cartOpen]);

  //this function below will launch the pop-up window
  function launchPopup(id) {
    const allMenuOptions = [...appetizers, ...mains, ...sides, ...drinks];
    setPopupItem(allMenuOptions.find((item) => item.id === id));
  }

  //cycles through all menu options and finds the one that has been selected
  React.useEffect(() => {
    const allMenuOptions = [...appetizers, ...mains, ...sides, ...drinks];
    setPopupItem(allMenuOptions.find((item) => item.popup === true));
  }, [appetizers, mains, sides, drinks]);

  //closes the popup window and clears all menu items from being selected
  function closePopup() {
    setPopupItem(undefined);
  }

  return (
    <div className="order-container container">
      {cartItems.length > 0 && <CartButton onClick={() => setCartOpen(true)} />}
      {popupItem && <Popup item={popupItem} closePopup={() => closePopup()} />}
      {cartOpen && <Cart closeMenu={() => setCartOpen(false)} />}
      <h2> Menu </h2>
      <Accordion>
          <MenuSection onClick={launchPopup} title={"Appetizers"} section={appetizers} index={0}/>
          <MenuSection onClick={launchPopup} title={"Mains"} section={mains} index={1}/>
          <MenuSection onClick={launchPopup} title={"Sides"} section={sides} index={2}/>
          <MenuSection onClick={launchPopup} title={"Drinks"} section={drinks} index={3}/>
      </Accordion>
    </div>
  );
}
