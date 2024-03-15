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
            <li className="address__shipDetailsItem">Isaac Gonzalez</li>
            <li className="address__shipDetailsItem">221-11 59th Ave</li>
            <li className="address__shipDetailsItem">
              Oakland Gardens, New York, 11364
            </li>
            <li className="address__shipDetailsItem">United States</li>
            <li className="address__shipDetailsItem">3472004841</li>
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
