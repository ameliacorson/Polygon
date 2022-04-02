import React from "react";
import Menu from "../menu.json";
import MenuSection from "../components/MenuSection";
import Popup from "../components/Popup";
import CartButton from "../components/CartButton";
import { Accordion } from "react-bootstrap";
import { Parallax } from "react-parallax"

import { useCart } from "../Context/cartProvider";
import Cart from "../components/Cart";
import sushiHeader from "../img/sushiHeader.webp"

export default function Order() {
  const { appetizers, mains, sides, drinks } = Menu
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

  React.useEffect(() => {
     window.scrollTo(0, 0)
  }, []);

  function launchPopup(id) {
    const allMenuOptions = [...appetizers, ...mains, ...sides, ...drinks];
    setPopupItem(allMenuOptions.find((item) => item.id === id));
  }
 
  function closePopup() {
    setPopupItem(undefined);
  }

 

  return (
    <div className="order-container">
      <Parallax strength={300} bgImage={sushiHeader}>
        <div className="order-img" >
        <h2 className="order-header"> Order </h2>
        </div>
      </Parallax>
      <div className="container">
      {cartItems.length > 0 && <CartButton onClick={() => setCartOpen(true)} />}
      {popupItem && <Popup item={popupItem} closePopup={() => closePopup()} />}
      {cartOpen && <Cart closeMenu={() => setCartOpen(false)} />}
      
      <Accordion defaultActiveKey="1" flush alwaysOpen>
          <MenuSection onClick={launchPopup} title={"Appetizers"} section={appetizers} index={0}/>
          <MenuSection onClick={launchPopup} title={"Mains"} section={mains} index={1}/>
          <MenuSection onClick={launchPopup} title={"Sides"} section={sides} index={2}/>
          <MenuSection onClick={launchPopup} title={"Drinks"} section={drinks} index={3}/>
      </Accordion>
      </div>
    </div>
  );
}
