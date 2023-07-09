// Library Imports
import { Route, Routes } from "react-router-dom";
// Component Imports
import NavBar from "./components/navBar/NavBar";
import Home from "./components/Home/Home";
import GearIndex from "./components/gearIndex/GearIndex";
import ItemDetail from "./components/itemDetail/ItemDetail";
import FourOFour from "./components/404/FourOFour";
import Profile from "./components/accounts/Profile/Profile";
import Cart from "./components/accounts/cart/Cart";
import { CartProvider } from "./components/accounts/cart/CartContext";
// Page Imports
// -
// Hook Imports
//-
//Styling Imports
// -
import React from "react";

export default function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/gear" element={<GearIndex key={"Gear index"} />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gear/:productId" element={<ItemDetail />}></Route>
        <Route path="/login" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/404" element={<FourOFour />} />
        <Route path="/*" element={<FourOFour />} />
      </Routes>
    </CartProvider>
  );
}
