// Library Imports
import { Route, Routes } from "react-router-dom";
// Component Imports
import NavBar from "./components/navBar/NavBar";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/rightPanel";
import Home from "./components/home/Home";
import GearIndex from "./components/gearIndex/GearIndex";
import ItemDetail from "./components/itemDetail/ItemDetail";
import FourOFour from "./components/404/FourOFour";
import Profile from "./components/accounts/Profile/Profile";
// Page Imports
// -
// Hook Imports
//-
//Styling Imports
// -
import React from "react";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/gear" element={<GearIndex />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens/:productId" element={<ItemDetail />}></Route>
        <Route path="/womens/:productId" element={<ItemDetail />}></Route>
        <Route path="/login" element={<Profile />}></Route>
        <Route path="/404" element={<FourOFour />} />
        <Route path="/*" element={<FourOFour />} />
        {/* We need GearShow to be able to have a custom filter for men/ women and sync to route. */}
        {/* <Route path="/gear/mens" element={<GearShow />}></Route> */}
      </Routes>
    </div>
  );
}
