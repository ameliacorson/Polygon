import React from "react";
import Menu from "../menu.json";
import MenuSection from "../components/MenuSection";
import MenuItemFormPopup from "../components/Popup";
import CartButton from "../components/CartButton";
import { Accordion } from "react-bootstrap";
import Cart from "../components/Cart";


export default function Order() {
  const { mains, appetizers, sides, drinks } = Menu;
  const [popupItem, setPopupItem] = React.useState();
  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  const handleClickMenuItem = (itemId) => {
    // Its a small menu, so probably not worth conditionally searching sections.
    const item = [...mains, ...appetizers, ...sides, ...drinks].find(item => item.id === itemId);
    setPopupItem(item);
  }


  return (
    <div className="order-container container">
      <CartButton onClick={() => setCartIsOpen(true)} />
      {cartIsOpen && <Cart closeMenu={() => setCartIsOpen(false)} />}
      {popupItem && <MenuItemFormPopup item={popupItem} closePopup={() => setPopupItem(null)} />}
      <h2> Menu </h2>
      <Accordion>
        <MenuSection sectionData={appetizers} sectionTitle={"Appetizers"} index={0} handleItemClick={handleClickMenuItem} />
        <MenuSection sectionData={mains} sectionTitle={"Mains"} index={1} handleItemClick={handleClickMenuItem} />
        <MenuSection sectionData={sides} sectionTitle={"Sides"} index={2} handleItemClick={handleClickMenuItem} />
        <MenuSection sectionData={drinks} sectionTitle={"Drinks"} index={3} handleItemClick={handleClickMenuItem} />
      </Accordion>
    </div>
  );
}
