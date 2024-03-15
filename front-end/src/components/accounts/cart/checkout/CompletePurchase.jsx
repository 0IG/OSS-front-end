import React from "react";
import SecurePay from "./securePay/SecurePay";
import PayMethod from "./payMethod/PayMethod";
import Address from "./address/Address";
import "./CompletePurchase.scss";
// import loadStripe from "@stripe/stripe-js";

export default function CompletePurchase() {
  // const makePayment = async (event) => {
  //   const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  // };

  return (
    <div className="completePurchase">
      <Address />
      <PayMethod />
      <SecurePay />
    </div>
  );
}
