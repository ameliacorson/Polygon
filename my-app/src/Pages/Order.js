import React from "react";
import Menu from "../menu.json";
import MenuItem from "../components/MenuItem";
import Popup from "../components/Popup";
import CartButton from "../components/CartButton";
import { Accordion } from "react-bootstrap";

import { CartState } from "../Context/Context";
import Cart from "../components/Cart";

export default function Order() {
  const [appetizers, setAppetizers] = React.useState([]);
  const [mains, setMains] = React.useState([]);
  const [sides, setSides] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [popupItem, setPopupItem] = React.useState();
  const [cartOpen, setCartOpen] = React.useState(false);
  const {
    state: { cartItems },
  } = CartState();

  React.useEffect(() => {
    function createMenuObjects(menuSection) {
      return menuSection.map((element) => {
        return {
          name: element.name,
          description: element.description,
          id: element.id,
          price: element.price,
          choice: element.choice,
          spicy: element.spicy,
          rice: element.rice,
          popup: false,
          inCart: false,
          inCartQuantity: 0,
        };
      });
    }
    setAppetizers(createMenuObjects(Menu.appetizers));
    setMains(createMenuObjects(Menu.mains));
    setSides(createMenuObjects(Menu.sides));
    setDrinks(createMenuObjects(Menu.drinks));
  }, []);

  React.useEffect(() => {
    if (popupItem || cartOpen) {
      document.body.style.overflowY = "hidden";
    } else if (!popupItem && !cartOpen) {
      document.body.style.overflowY = "auto";
    }
  }, [popupItem, cartOpen]);

  //this function below will launch the pop-up window
  function launchPopup(category, id) {
    console.log(document.body.style.overflow);
    if (category === appetizers) {
      setAppetizers((prevApps) =>
        prevApps.map((app) => {
          if (app.id === id) {
            return {
              ...app,
              popup: true,
            };
          } else {
            return app;
          }
        })
      );
    } else if (category === mains) {
      setMains((prevMains) =>
        prevMains.map((main) => {
          if (main.id === id) {
            return {
              ...main,
              popup: true,
            };
          } else {
            return main;
          }
        })
      );
    } else if (category === sides) {
      setSides((prevSides) =>
        prevSides.map((side) => {
          if (side.id === id) {
            return {
              ...side,
              popup: true,
            };
          } else {
            return side;
          }
        })
      );
    } else if (category === drinks) {
      setDrinks((prevDrinks) =>
        prevDrinks.map((drink) => {
          if (drink.id === id) {
            return {
              ...drink,
              popup: true,
            };
          } else {
            return drink;
          }
        })
      );
    }
  }

  //cycles through all menu options and finds the one that has been selected
  React.useEffect(() => {
    const allMenuOptions = [...appetizers, ...mains, ...sides, ...drinks];
    setPopupItem(allMenuOptions.find((item) => item.popup === true));
  }, [appetizers, mains, sides, drinks]);

  //closes the popup window and clears all menu items from being selected
  function closePopup() {
    setPopupItem(undefined);
    setAppetizers((prevApps) =>
      prevApps.map((app) => {
        return {
          ...app,
          popup: false,
        };
      })
    );
    setMains((prevMains) =>
      prevMains.map((main) => {
        return {
          ...main,
          popup: false,
        };
      })
    );
    setSides((prevSides) =>
      prevSides.map((side) => {
        return {
          ...side,
          popup: false,
        };
      })
    );
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) => {
        return {
          ...drink,
          popup: false,
        };
      })
    );
  }

  function createElements(section) {
    return section.map((element) => {
      return (
        <MenuItem
          name={element.name}
          description={element.description}
          key={element.id}
          price={element.price}
          onclick={() => launchPopup(section, element.id)}
        />
      );
    });
  }

  const AppetizersElements = () => createElements(appetizers);
  const MainsElements = () => createElements(mains);
  const SidesElements = () => createElements(sides);
  const DrinksElements = () => createElements(drinks);

  return (
    <div className="order-container container">
      <CartButton onClick={() => setCartOpen(true)} />
      {popupItem && <Popup item={popupItem} closePopup={() => closePopup()} />}
      {cartOpen && <Cart closeMenu={() => setCartOpen(false)} />}
      <h2> Menu </h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3> Appetizers </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div className="menu-section">
              <AppetizersElements />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3> Mains </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div className="menu-section">
              <MainsElements />
            </div>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3> Sides </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div className="menu-section">
              <SidesElements />
            </div>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3> Drinks </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div className="menu-section">
              <DrinksElements />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
