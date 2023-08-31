import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import TotalPrice from "./TotalPrice";

export default function Cart() {
  const cart = useContext(CartContext);
  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__container">
          <div className="cart__title">SHOPPING BAG</div>
          <div className="cart__titleContainer">
            <div className="cart__itemTitle">ITEM</div>
            <div className="cart__totalTitle">TOTAL</div>
          </div>
          <div className="cart__line"></div>
          <div className="cart__itemContainer">
            {cart?.items.length > 0
              ? cart.items.map((item) => {
                  return <CartItem key={item.id} item={item} cart={cart} />;
                })
              : ""}
          </div>
        </div>
        <TotalPrice className="totalPrice" />
      </div>
      <Checkout className="checkout" />
    </div>
  );
}
