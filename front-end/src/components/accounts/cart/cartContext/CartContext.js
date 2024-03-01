import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  getItemQuantity: () => {},
  addItem: () => {},
  removeItem_old: () => {},
  removeItem: () => {},
  //   moveItemWL: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("itemsInCart")
      ? JSON.parse(localStorage.getItem("itemsInCart"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
  }, [cartItems]);

  function getItemQuantity(id) {
    const quantity = cartItems.find((item) => item.id === id)?.quantity;

    return quantity === undefined ? 0 : quantity;
  }

  function addItem(item) {
    const quantity = getItemQuantity(item.id);
    if (quantity === 0) {
      //product not in cart
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          designer: item.designed_by,
          quantity: 1,
        },
      ]);
    } else {
      //product is in cart
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        })
      );
    }
  }

  function removeItem_old(id) {
    const quantity = getItemQuantity(id);
    if (quantity === 1) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        })
      );
    }
  }

  function removeItem(item) {
    const remainingItems = cartItems.filter((curr) => {
      return curr.id !== item.id;
    });
    setCartItems(remainingItems);
  }

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((item) => {
      totalCost += item.price * item.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartItems,
    getItemQuantity,
    addItem,
    removeItem_old,
    removeItem,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}