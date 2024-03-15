import React from "react";
import "./PayMethod.scss";

export default function PayMethod() {
  return (
    <div className="payMethod">
      <div className="payMethod__payMethodTitle">PAYMENT METHOD</div>
      <div className="payMethod__payMethods">
        <input type="radio" />
        <label className="payMethod__payMethodLabel">
          Pay with credit or debit card
        </label>
        <br />
        <input type="radio" />
        <label className="payMethod__payMethodLabel">Pay with PayPal</label>
        <br />
        <input type="radio" />
        <label className="payMethod__payMethodLabel">Pay with Alipay</label>
        <br />
        <input type="radio" />
        <label className="payMethod__payMethodLabel">Pay with Klarna</label>
        <div className="payMethod__klarnaTip">
          4 intrest-free payments of $80.02 with Klarna{" "}
          <span style={{ textDecoration: "underline" }}>Learn More</span>
        </div>
      </div>
    </div>
  );
}
