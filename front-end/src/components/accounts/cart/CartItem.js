import React from "react";
import "./CartItem.scss";
export default function CartItem({ cart, item }) {
  return (
    <div>
      <div className="cartItem">
        <div className="cartItem__imgContainer">
          <img className="cartItem__img" src={item.image} alt="itemImage"></img>
        </div>
        <div className="cartItem__textLeftContainer">
          <div className="cartItem__itemDesigner">{item.name}</div>
          <div className="cartItem__itemDesigner">{item.name}</div>
          <div className="cartItem__itemSize">
            SIZE :
            <select className="cartItem__select">
              <option className="cartItem__itemSize">S</option>
              <option className="cartItem__itemSize">M</option>
              <option className="cartItem__itemSize">L</option>
              <option className="cartItem__itemSize">XL</option>
            </select>
          </div>

          <div className="cartItem__itemRemain">Only 1 remaining</div>
          <div className="cartItem__space"></div>
          <button className="cartItem__itemMoveWL">Move to Wishlist</button>
        </div>
        <div className="cartItem__textRightContainer">
          <div className="cartItem__itemPrice">${item.price} USD</div>
          <div className="cartItem__space"></div>
          <button
            className="cartItem__itemRemove"
            onClick={() => cart.removeItem(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
