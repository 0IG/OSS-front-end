import React from "react";
import "./RightPanel.scss";

export default function RightPanel() {
  return (
    <div className="RightPanel">
      <div className="RightPanel__sort">
        <div className="RightPanel__sortTitle">SORT</div>
        <div className="RightPanel__latest">Latest arrivals</div>
        <div className="RightPanel__trending">Trending</div>
        <div className="RightPanel__lowToHigh">Price: Low to high</div>
        <div className="RightPanel__highToLow">Price: Hight to Low</div>
      </div>

      <div className="RightPanel__colors">
        <div className="RightPanel__colorsTitle">COLORS</div>
        <div className="RightPanel__all">ALL COLORS</div>
        <div className="RightPanel__black">Black</div>
        <div className="RightPanel__blue">Blue</div>
        <div className="RightPanel__brown">Brown</div>
        <div className="RightPanel__burgundy">Burgundy</div>
        <div className="RightPanel__gray">Gray</div>
        <div className="RightPanel__green">Green</div>
        <div className="RightPanel__navy">Navy</div>
        <div className="RightPanel__orange">Orange</div>
        <div className="RightPanel__pink">Pink</div>
        <div className="RightPanel__purple">Purple</div>
        <div className="RightPanel__red">Red</div>
        <div className="RightPanel__tan">Tan</div>
        <div className="RightPanel__white">White</div>
        <div className="RightPanel__yellow">Yellow</div>
      </div>
    </div>
  );
}
