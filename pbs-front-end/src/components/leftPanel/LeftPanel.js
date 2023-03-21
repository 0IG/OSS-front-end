import React from "react";
import "./LeftPanel.scss";
import { useState, useEffect } from "react";
export default function LeftPanel() {
  //   function giveAlphabetizedVendors() {}
  //   function listOfDesigners(){}
  return (
    <div className="leftPanel">
      <div className="leftPanel__categories">
        <ul className="leftPanel__allItemsList">
          <li className="leftPanel__item">GI</li>
          <li className="leftPanel__item">RASHGUARD</li>
          <li className="leftPanel__item">SHORTS</li>
          <li className="leftPanel__item">BELTS</li>
          <li className="leftPanel__item">GLOVES</li>
        </ul>
      </div>
      <div className="leftPanel__designers">
        <ul className="leftPanel__designersList">
          <li className="leftPanel__designer">Origin</li>
          <li className="leftPanel__designer">Origin</li>
          <li className="leftPanel__designer">Origin</li>
          <li className="leftPanel__designer">Origin</li>
          <li className="leftPanel__designer">Origin</li>
        </ul>
      </div>
    </div>
  );
}
