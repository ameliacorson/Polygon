import { createContext, useContext, useState } from "react";
import React from "react";
import { getLocalDeliveryInformation, setDeliveryLocalState, getLocalCcInformation, setCcLocalState } from "./paymentMethods";

const PaymentContext = createContext();

export default function PaymentContextProvider({ children }) {

    const [deliveryAddress, setDeliveryAddress] = useState(getLocalDeliveryInformation())
    const [creditCardInformation, setCreditCardInformation] = useState(getLocalCcInformation())
    
    function addDeliveryAddress(items){
        setDeliveryAddress(items)
        setDeliveryLocalState(items)
    }

    function addCCInformation(items){
        setCreditCardInformation(items)
        setCcLocalState(items)
    }

    function clearPaymentInfo() {
      addDeliveryAddress({})
      addCCInformation({})
    }

  return <PaymentContext.Provider value={{ deliveryAddress, creditCardInformation, addDeliveryAddress,  addCCInformation, clearPaymentInfo }}>{children}</PaymentContext.Provider>;
}

export const usePaymentInfo = () => {
    return useContext(PaymentContext);
  };
