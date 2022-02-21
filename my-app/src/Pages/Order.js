import React from "react";

import Menu from "../menu.json";
import MenuItem from "../components/MenuItem";

export default function Order() {
  const { appetizers, mains, sides, drinks } = Menu;

  function createElements(section) {
    return section.map((element) => {
      return (
        <MenuItem
          name={element.name}
          description={element.description}
          key={element.id}
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
