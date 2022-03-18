import { createContext, useContext, useState } from "react";
import React from "react";
import { getLocalDeliveryInformation, setDeliveryLocalState, getLocalBillingInformation, setBillingLocalState, getLocalCcInformation, setCcLocalState } from "./paymentMethods";

const PaymentContext = createContext();

export default function PaymentContextProvider({ children }) {

    const [deliveryAddress, setDeliveryAddress] = useState(getLocalDeliveryInformation())
    const [billingAddress, setBillingAddress] = useState(getLocalBillingInformation())
    const [creditCardInformation, setCreditCardInformation] = useState(getLocalCcInformation())
    
    function addDeliveryAddress(items){
        setDeliveryAddress(items)
        setDeliveryLocalState(items)
    }

    function addBillingAddress(items){
        setBillingAddress(items)
        setBillingLocalState(items)
    }

    function addCCInformation(items){
        setCreditCardInformation(items)
        setCcLocalState(items)
    }

    function clearPaymentInfo() {
      addDeliveryAddress({})
      addBillingAddress({})
      addCCInformation({})
    }

  return <PaymentContext.Provider value={{ deliveryAddress, billingAddress, creditCardInformation, addDeliveryAddress, addBillingAddress, addCCInformation, clearPaymentInfo }}>{children}</PaymentContext.Provider>;
}

export const usePaymentInfo = () => {
    return useContext(PaymentContext);
  };
