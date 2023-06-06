import React from "react";
import "./LeftPanel.scss";
import { useState, useEffect } from "react";
export default function LeftPanel() {
  //   function giveAlphabetizedVendors() {}
  //   function listOfDesigners(){}
  return (
    <div className="leftPanel">
      <div className="leftPanel__allCatText">ALL CATEGORIES</div>
      <div className="leftPanel__categories">
        <div className="leftPanel__allItemsList">
          <div className="leftPanel__item">GI</div>
          <div className="leftPanel__item">RASHGUARD</div>
          <div className="leftPanel__item">SHORTS</div>
          <div className="leftPanel__item">BELTS</div>
          <div className="leftPanel__item">GLOVES</div>
        </div>
      </div>
      <div className="leftPanel__designers">
        <div className="leftPanel__allDesiText">ALL DESIGNERS</div>
        <div className="leftPanel__designersList">
          <div className="leftPanel__designer">Origin</div>
          <div className="leftPanel__designer">WARTRIBE</div>
          <div className="leftPanel__designer">RENZO GRACIE</div>
          <div className="leftPanel__designer">FUJI</div>
          <div className="leftPanel__designer">RTD</div>
          <div className="leftPanel__designer">RCVA</div>
          <div className="leftPanel__designer">FUTURE</div>
          <div className="leftPanel__designer">BRAUS</div>
          <div className="leftPanel__designer">CONCA</div>
          <div className="leftPanel__designer">FUSION</div>
          <div className="leftPanel__designer">GRACIE STORE</div>
          <div className="leftPanel__designer">HOOKS</div>
          <div className="leftPanel__designer">INVERTED GEAR</div>
        </div>
      </div>
    </div>
  );
}
