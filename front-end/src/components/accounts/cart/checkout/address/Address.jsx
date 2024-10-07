import React from "react";
import "./Address.scss";
export default function Address() {
  return (
    <div>
      <div className="address">
        <div className="address__checkoutTitle">CHECKOUT</div>
        <div className="address__info">
          <div className="address__shipAddressTitle">SHIPPING ADDRESS</div>
          <button className="address__shipAddressAdd">
            Use Other Address +
          </button>
          <div className="address__shipDetails">
            <li className="address__shipDetailsItem">Jon Jones</li>
            <li className="address__shipDetailsItem">123 Main Street</li>
            <li className="address__shipDetailsItem">
              1428 Elm Street
            </li>
            <li className="address__shipDetailsItem">United States</li>
            <li className="address__shipDetailsItem">123-456-7890</li>
            <input type="checkbox" className="address__billingCheckbox" />
            <label className="address__billingLabel">
              Use as billing address
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
