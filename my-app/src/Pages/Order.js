import React from "react";

import Menu from "../menu.json";
import MenuItem from "../components/MenuItem";
import Popup from "../components/Popup";

export default function Order() {
  const [appetizers, setAppetizers] = React.useState([]);
  const [mains, setMains] = React.useState([]);
  const [sides, setSides] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [popupOn, setPopupOn] = React.useState(false)
  const [popupItem, setPopupItem] = React.useState()

  React.useEffect(() => {
    function createMenuObjects(menuSection) {
      return menuSection.map((element) => {
        return {
          name: element.name,
          description: element.description,
          id: element.id,
          price: element.price,
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


  //this function below will launch the pop-up window
  function launchPopupAppetizer(appId) {
    setPopupOn(true)
    setAppetizers((prevApps) =>
    prevApps.map((app) => {
      if (app.id === appId) {
        console.log("match", 1)
        console.log(app, 2)
        return {
          ...app,
          popup: true,
        };
      } else {
          return app
        }
    })
    )
  }

  console.log(appetizers, 3)

  function closePopup() {
    setPopupOn(false)
    setPopupItem(undefined)
    setAppetizers((prevApps) =>
    prevApps.map((app) => {
      return {
        ...app,
        popup: false
      }
    })
    )
  console.log(appetizers)
  }

//   <Popup 
//   name={clicked.name}
//   description={clicked.description}
//   id={clicked.id}
//   price={clicked.price}
//   popup={clicked.popup}
//   inCart={clicked.inCart}
//   inCartQuantity={clicked.inCartQuantity}
//   closePopup={() => closePopup()}
// />

  function createElements(section) {
    return section.map((element) => {
      return (
        <MenuItem
          name={element.name}
          description={element.description}
          key={element.id}
          price={element.price}
          onclick={() => launchPopupAppetizer(element.id)}
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

      <h2> Menu </h2>
      <h3> Appetizers </h3>
      <div className="menu-section">
        <AppetizersElements />
        {popupOn && <Popup closePopup={() => closePopup()} />}
      </div>
      <h3>Mains</h3>
      <div className="menu-section">
        <MainsElements />
      </div>
      <h3>Sides</h3>
      <div className="menu-section">
        <SidesElements />
      </div>
      <h3>Drinks</h3>
      <div className="menu-section">
        <DrinksElements />
      </div>
    </div>
  );
}
