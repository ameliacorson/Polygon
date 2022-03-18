import React from "react";
import { Routes, Route } from "react-router-dom";
import PaymentContextProvider from "../Context/paymentProvider";

import StepIndicator from "../components/StepIndicator";

import CheckoutCart from "../components/CheckoutCart";
import CheckoutPayment from "../components/CheckoutPayment";
import CheckoutConfirm from "../components/CheckoutConfirm";

export default function Checkout() {
//   const [billingInfo, setBillingInfo] = useState({
//     name: "",
//     email: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     zipCode: "",
// });
// const [deliveryInfo, setDeliveryInfo] = useState({
//     name: "",
//     email: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     zipCode: "",
// });
// const [sameBillingDelivery, setSameBillingDelivery] = useState(false);

// const [ccInformation, setCcInformation] = useState({
//   ccNumber: "",
//   ccvNumber: "",
//   expDate: ""
// })

// const handleBillingChange = (e) => {
//     const { name, value } = e.target;
//     setBillingInfo({
//         ...deliveryInfo,
//         [name]: value,
//     });
// };

// const handleDeliveryChange = (e) => {
//   const { name, value } = e.target;
//   setDeliveryInfo({
//       ...deliveryInfo,
//       [name]: value,
//   });
// };

// const handleCCInfoChange = (e) => {
//   const { name, value } = e.target;
//   setCcInformation({
//       ...ccInformation,
//       [name]: value,
//   });
// };

// const handleCheckboxToggle = (e) => {
//   if (e.target.checked) {
//       setBillingInfo(deliveryInfo);
//       setSameBillingDelivery(true);
//   } else {
//       setBillingInfo({
//           name: "",
//           email: "",
//           address1: "",
//           address2: "",
//           city: "",
//           state: "",
//           zipCode: "",
//       });
//       setSameBillingDelivery(false);
//   }
// };

// function handleSubmit() {
//   console.log("submitted")
// }
  
  
  
  document.body.style.overflow = "auto";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="checkout">
      <div className="container">
        <h3 className="accent-header">Checkout</h3>

        <StepIndicator />
        <PaymentContextProvider>
        <Routes>
          <Route path="cart" element={<CheckoutCart />} />
          <Route path="payment" element={<CheckoutPayment 
          />} />
          <Route path="confirm" element={<CheckoutConfirm />} />
        </Routes>
        </PaymentContextProvider>

        <div className="subtotal-sidebar"></div>
      </div>
    </div>
  );
}
