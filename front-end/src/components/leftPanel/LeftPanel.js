import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CategoryItem from "../categoryItem/CategoryItem";
import "./LeftPanel.scss";

export default function LeftPanel() {
  let location = useLocation();
  let urlParams = new URLSearchParams(location.search);
  let [searchParms, setSearchParms] = useSearchParams();
  let categoryNames = ["GI", "RASHGUARD", "SHORTS", "BELTS", "GLOVES"];
  let designerNames = [
    "Origin",
    "WAR TRIBE",
    "RENZO GRACIE",
    "FUJI",
    "RTD",
    "FUTURE",
    "BRAUS",
    "FUSION",
    "CONCA",
    "RVCA",
    "HOOKS",
    "INVERTED GEAR",
    "GRACIE STORE",
  ];

  return (
    <div className="leftPanel">
      <div className="leftPanel__allCatText">ALL CATEGORIES</div>
      <div className="leftPanel__categories">
        <div className="leftPanel__allItemsList">
          {categoryNames.map((item, curr) => {
            return (
              <CategoryItem
                urlParams={urlParams}
                item={item}
                location={location}
                type="category"
              />
            );
          })}
        </div>
      </div>
      <div className="leftPanel__designers">
        <div className="leftPanel__allDesiText">ALL DESIGNERS</div>
        <div className="leftPanel__designersList">
          {designerNames.map((item, curr) => {
            return (
              <CategoryItem
                urlParams={urlParams}
                item={item}
                location={location}
                type="designer"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
