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
      <div>
        {cart?.items.length > 0
          ? cart.items.map((item) => {
              return <CartItem key={item.id} item={item} cart={cart} />;
            })
          : ""}
      </div>
      <div className="cart__line"></div>
      <div className="cart__total"></div>
      <div className="cart__shippingEst"></div>
      <div className="cart__orderTotal"></div>
    </div>
  );
}

{
  /* 
  <div className="cart__itemDesigner">War Tribe</div>
<div className="cart__itemName">Viking Reborn</div>
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
<div className="cart__itemPrice">59.99</div>
<button className="cart__itemMoveWL">Move to Wishlist</button>
<button className="cart__itemRemove">Remove</button>

*/
}
