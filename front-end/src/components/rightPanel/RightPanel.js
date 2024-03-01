import React from "react";
import "./RightPanel.scss";
import { useLocation, useSearchParams } from "react-router-dom";
import CategoryItem from "../categoryItem/CategoryItem";
export default function RightPanel() {
  let location = useLocation();
  let urlParams = new URLSearchParams(location.search);
  let [searchParms, setSearchParms] = useSearchParams();
  let sortBy = [
    "Latest arrivals",
    "Trending",
    "Price: Low to High",
    "Price: High to Low",
  ];
  let colorsList = [
    "Black",
    "Blue",
    "Brown",
    "Burgundy",
    "Gray",
    "Green",
    "Navy",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Tan",
    "White",
    "Yellow",
  ];

  return (
    <div className="RightPanel">
      <div className="RightPanel__sort">
        <li className="RightPanel__sortTitle">SORT</li>
        <div className="leftPanel__allItemsList">
          {sortBy.map((item, curr) => {
            return (
              <CategoryItem
                urlParams={urlParams}
                item={item}
                location={location}
                type="sort"
              />
            );
          })}
        </div>
      </div>

      <div className="RightPanel__colors">
        <div className="RightPanel__colorsTitle">COLORS</div>
        <div className="RightPanel__all">ALL COLORS</div>
        {colorsList.map((item, curr) => {
          return (
            <CategoryItem
              urlParams={urlParams}
              item={item}
              location={location}
              type="colors"
            />
          );
        })}
      </div>
    </div>
  );
}
