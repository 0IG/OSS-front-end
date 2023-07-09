import React from "react";
import "./RightPanel.scss";

export default function rightPanel() {
  return (
    <div className="rightPanel">
      <div className="rightPanel__sort">
        <div className="rightPanel__sortTitle">SORT</div>
        <div className="rightPanel__latest">Latest arrivals</div>
        <div className="rightPanel__trending">Trending</div>
        <div className="rightPanel__lowToHigh">Price: Low to high</div>
        <div className="rightPanel__highToLow">Price: Hight to Low</div>
      </div>

      <div className="rightPanel__colors">
        <div className="rightPanel__colorsTitle">COLORS</div>
        <div className="rightPanel__all">ALL COLORS</div>
        <div className="rightPanel__black">Black</div>
        <div className="rightPanel__blue">Blue</div>
        <div className="rightPanel__brown">Brown</div>
        <div className="rightPanel__burgundy">Burgundy</div>
        <div className="rightPanel__gray">Gray</div>
        <div className="rightPanel__green">Green</div>
        <div className="rightPanel__navy">Navy</div>
        <div className="rightPanel__orange">Orange</div>
        <div className="rightPanel__pink">Pink</div>
        <div className="rightPanel__purple">Purple</div>
        <div className="rightPanel__red">Red</div>
        <div className="rightPanel__tan">Tan</div>
        <div className="rightPanel__white">White</div>
        <div className="rightPanel__yellow">Yellow</div>
      </div>
    </div>
  );
}
