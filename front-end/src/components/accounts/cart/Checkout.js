import React, { useState, useEffect } from "react";
import "./Checkout.scss";
import EmptyView from "../../emptyView/EmptyView";
import axios from "axios";

export default function checkout() {
  return (
    <div className="checkout">
      <div className="checkout__loggedAs">LOGGED IN AS</div>
      <div className="checkout__userEmail">isaac@oss.com</div>
      <div className="checkout__swapAcc">
        Not your account?
        <span>Sign in as another user.</span>
      </div>
      <div className="checkout__btn">
        <button className="checkout__btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}
