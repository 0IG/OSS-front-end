import React from "react";
import "./CartItem.scss";
import { CartContext } from "./CartContext";
export default function CartItem({ cart, item }) {
  return (
    <div className="cartItem">
      <img className="cartItem__img" src={item.image}></img>

      <div className="cart__itemDesigner">{item.designedBy}</div>
      <div className="cart__itemName">{item.name}</div>

      <div className="cart__itemSize">
        SIZE :
        <select className="cart__select">
          <option className="cart__itemSize">S</option>
          <option className="cart__itemSize">M</option>
          <option className="cart__itemSize">L</option>
          <option className="cart__itemSize">XL</option>
        </select>
      </div>

      <div className="cart__itemRemain">Only 1 remaining</div>
      <div className="cart__itemPrice">${item.price} USD</div>
      <button className="cart__itemMoveWL">Move to Wishlist</button>
      <button
        className="cart__itemRemove"
        onClick={() => cart.deleteItem(item)}
      >
        Remove
      </button>
    </div>
  );
}
