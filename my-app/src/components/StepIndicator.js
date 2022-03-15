import React from 'react'
import { NavLink } from 'react-router-dom'

function StepIndicator() {

    const steps = [
        {
            path: "/checkout/cart",
            name: "cart"
        },
        {
            path: "/checkout/payment",
            name: "payment"
        },
        {
            path: "/checkout/confirm",
            name: "confirm"
        }
    ]

  return (
    <div className='step-indicator'>
        {steps.map((step, index) => {
            return (
            <NavLink key={index} to={step.path}>
                {step.name}
            </NavLink>
            );
        })}


    </div>
  )
}

export default StepIndicator