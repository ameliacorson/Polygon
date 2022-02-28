import React from "react";

import Menu from "../menu.json";
import MenuItem from "../components/MenuItem";
import Popup from "../components/Popup";

export default function Order() {
  const [appetizers, setAppetizers] = React.useState([]);
  const [mains, setMains] = React.useState([]);
  const [sides, setSides] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [popupItem, setPopupItem] = React.useState();

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

  //this function below will launch the pop-up window
  function launchPopup(category, id) {
    if (category === appetizers){
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
      }))
    
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
      }))
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
      }))
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
      }))
    }
    }
  

  React.useEffect(() => {
    const allMenuOptions = [...appetizers, ...mains, ...sides, ...drinks]
    setPopupItem(allMenuOptions.find(item => item.popup === true))
  }, [appetizers, mains, sides, drinks]);

  React.useEffect(() => {
    console.log(popupItem)
  }, [popupItem]);

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
      <h2> Menu </h2>
      <h3> Appetizers </h3>
      <div className="menu-section">
        <AppetizersElements />
        {popupItem && <Popup item={popupItem} closePopup={() => closePopup()} />}
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
