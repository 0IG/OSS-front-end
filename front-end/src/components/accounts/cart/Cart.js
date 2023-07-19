import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="cart">
      <div className="cart__title">SHOPPING BAG</div>
      <div className="cart__itemTitle">ITEM</div>
      <div className="cart__totalTitle">TOTAL</div>
      <div className="cart__line"></div>
      <div className="cart__itemContainer">
        {cart?.items.length > 0
          ? cart.items.map((item) => {
              return <CartItem key={item.id} item={item} cart={cart} />;
            })
          : ""}
      </div>
      <div className="cart__totalLeftPane">
        <div className="cart__totalText">Total</div>
        <div className="cart__shippingEstText">Shipping estimate</div>
        <div className="cart__orderTotalText">Order Total</div>
      </div>
      <div className="cart__totalRightPane">
        <div className="cart__total">${cart.getTotalCost()} USD</div>
        <div className="cart__shippingEst">Calculated at Checkout</div>
        <div className="cart__orderTotal">${cart.getTotalCost()} USD</div>
      </div>
    </div>
  );
}
