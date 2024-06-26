import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  items: [],
  getItemQuantity: () => {},
  addItem: () => {},
  removeItem_old: () => {},
  removeItem: () => {},
  updateItem: () => {},
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

  function updateItem(item, size) {
    const { id } = item;
    cartItems.find((cartItem) => {
      if (cartItem.id === id) {
        cartItem.size = size;
      }
    });
  }

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
          size: item.size,
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

  function removeItem_old(item) {
    const { id } = item;
    const quantity = getItemQuantity(id);
    if (quantity === 1) {
      removeItem(item);
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
    updateItem,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
