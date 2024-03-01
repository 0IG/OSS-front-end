import React from "react";
import { CartContext } from "../cartContext/CartContext";
import { useContext } from "react";
import "./TotalPrice.scss";

export default function TotalPrice() {
  const cart = useContext(CartContext);

  return (
    <div className="totalPrice">
      <div className="totalPrice__totalLeftPane">
        <div className="totalPrice__totalText">Total</div>
        <div className="totalPrice__shippingEstText">Shipping estimate</div>
        <div className="totalPrice__orderTotalText">Order Total</div>
      </div>
      <div className="totalPrice__totalRightPane">
        <div className="totalPrice__total">${cart.getTotalCost()} USD</div>
        <div className="totalPrice__shippingEst">Calculated at Checkout</div>
        <div className="totalPrice__orderTotal">${cart.getTotalCost()} USD</div>
      </div>
    </div>
  );
}
