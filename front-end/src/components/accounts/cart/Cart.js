import React from "react";
import "./Cart.scss";

export default function WishList() {
  return (
    <div className="cart">
      <div className="cart__title">SHOPPING BAG</div>
      <div className="cart__itemTitle">ITEM</div>
      <div className="cart__totalTitle">TOTAL</div>
      <div className="cart__line"></div>
      <img
        className="cart__itemImg"
        src="https://wartribegear.com/wp-content/uploads/2021/10/Viking-Reborn-Rash-Guard-Front.png"
      ></img>
      <div className="cart__itemDesigner">War Tribe</div>
      <div className="cart__itemName">Viking Reborn</div>
      <div className="cart__itemSize">SIZE: L</div>
      <div className="cart__itemRemain">Only 1 remaining</div>
      <div className="cart__itemPrice">59.99</div>
      <button className="cart__itemMoveWL">Move to Wishlist</button>
      <button className="cart__itemRemove"></button>
      <div className="cart__line"></div>
      <div className="cart__total"></div>
      <div className="cart__shippingEst"></div>
      <div className="cart__orderTotal"></div>
    </div>
  );
}
