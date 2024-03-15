import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "./cartContext/CartContext";
import CartItem from "./cartItem/CartItem";
import Checkout from "./checkout/Checkout";
import TotalPrice from "./totalPrice/TotalPrice";
import EmptyCart from "../../emptyView/EmptyCart";

export default function Cart() {
  const cart = useContext(CartContext);
  if (cart.items.length === 0) {
    return <EmptyCart />;
  }
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
