// Library Imports
import { Route, Routes } from "react-router-dom";
// Component Imports
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import GearIndex from "./components/gearIndex/GearIndex";
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
      </Routes>
    </div>
  );
}
