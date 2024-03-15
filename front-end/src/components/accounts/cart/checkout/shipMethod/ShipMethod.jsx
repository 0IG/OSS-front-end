import React from "react";
import "./ShipMethod.scss";
export default function ShipMethod() {
  return (
    <div className="shipMethod">
      <div className="shipMethod__title">SHIPPING METHOD</div>
      <div className="shipMethod__methods">
        <input type="checkbox" className="shipMethod__checkbox" />
        <div className="">$0.00 USD | Standard</div>
        <div className="">
          Deliverd by Thursday, March 14 - Friday, March 15
        </div>
      </div>
    </div>
  );
}
