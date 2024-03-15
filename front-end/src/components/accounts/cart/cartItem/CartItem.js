import React from "react";
import "./CartItem.scss";
export default function CartItem({ cart, item }) {
  return (
    <div className="cartItem">
      <div className="cartItem__imgContainer">
        <img className="cartItem__img" src={item.image} alt="itemImage"></img>
      </div>
      <div className="cartItem__textLeftContainer">
        <div className="cartItem__itemDesigner">
          {item.designer.toUpperCase()}
        </div>
        <div className="cartItem__itemDesigner">{item.name}</div>
        <div className="cartItem__itemSize">
          SIZE :
          <select className="cartItem__select" defaultValue={item.size}>
            <option className="cartItem__itemSize" value="s">
              S
            </option>
            <option className="cartItem__itemSize" value="m">
              M
            </option>
            <option className="cartItem__itemSize" value="l">
              L
            </option>
            <option className="cartItem__itemSize" value="xl">
              XL
            </option>
          </select>
        </div>
        <div className="cartItem__itemRemain">{`Only 1 remaining`}</div>{" "}
        {/*  ^ Requires schema/seed to keep track of how many exisist in stock */}
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
  );
}
