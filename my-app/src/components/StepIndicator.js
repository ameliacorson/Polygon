import React from "react";
import { NavLink } from "react-router-dom";

function StepIndicator() {
  const steps = [
    {
      path: "/checkout/cart",
      name: "cart",
    },
    {
      path: "/checkout/payment",
      name: "payment",
    },
    {
      path: "/checkout/confirm",
      name: "confirm",
    },
  ];

  function handleStop(e) {
    e.preventDefault();
  }

  return (
    <div className="stepIndicator">
      {steps.map((step, index) => {
        return (
          <>
            <NavLink key={index} to={step.path} onClick={handleStop}>
              {step.name}
            </NavLink>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default StepIndicator;
