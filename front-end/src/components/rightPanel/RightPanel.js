import React from "react";
import "./RightPanel.scss";

export default function RightPanel() {
  return (
    <div className="RightPanel">
      <div className="RightPanel__sort">
        <li className="RightPanel__sortTitle">SORT</li>
        <li className="RightPanel__latest">Latest arrivals</li>
        <li className="trending">Trending</li>
        <li className="lowToHigh">Price: Low to High</li>
        <li className="highToLow">Price: High to Low</li>
      </div>

      <div className="RightPanel__colors">
        <div className="RightPanel__colorsTitle">COLORS</div>
        <div className="RightPanel__all">ALL COLORS</div>
        <li className="RightPanel__black">Black</li>
        <li className="RightPanel__blue">Blue</li>
        <li className="RightPanel__brown">Brown</li>
        <li className="RightPanel__burgundy">Burgundy</li>
        <li className="RightPanel__gray">Gray</li>
        <li className="RightPanel__green">Green</li>
        <li className="RightPanel__navy">Navy</li>
        <li className="RightPanel__orange">Orange</li>
        <li className="RightPanel__pink">Pink</li>
        <li className="RightPanel__purple">Purple</li>
        <li className="RightPanel__red">Red</li>
        <li className="RightPanel__tan">Tan</li>
        <li className="RightPanel__white">White</li>
        <li className="RightPanel__yellow">Yellow</li>
      </div>
    </div>
  );
}
