import React, { useContext } from "react";
import "./OrderSummary.scss";
import { CartContext } from "../../cartContext/CartContext";

export default function OrderSummary() {
  const cart = useContext(CartContext);

  let itemImages = cart.items.map((item) => item.image);
  let itemNames = cart.items.map((item) => item.name);

  return (
    <div className="orderSummary">
      <h1 className="orderSummary__title">ORDER SUMMARY</h1>
      <div className="orderSummary__item"></div>
      <div className="orderSummary__itemName"></div>
    </div>
  );
}
