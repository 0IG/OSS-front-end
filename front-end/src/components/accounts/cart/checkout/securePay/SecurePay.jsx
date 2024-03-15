import React from "react";
import "./SecurePay.scss";

export default function SecurePay() {
  return (
    <form className="securePay">
      <h1 className="securePay__title">SECURE PAYMENT</h1>
      <h5 className="securePay__msg">
        To protect your security and privacy, SSENSE encrypts all personal
        payment information.
      </h5>
      <div className="securePay__topContent">
        <div>Card number</div>
        <div>Expiration date</div>
        <input
          placeholder="1234 1234 1234 1234"
          className="securePay__longInput"
        />
        <input placeholder="MM/YY" className="securePay__shortInput" />
      </div>
      <div className="securePay__botContent">
        <input className="securePay__longInput" />
        <input placeholder="CVC" className="securePay__shortInput" />
      </div>
      <label>
        <input type="checkbox" />
        Save you card details for future purchases
      </label>
    </form>
  );
}
