import React from "react";
import "./Progress.scss";

export default function Progress() {
  return (
    <div className="progress">
      <div className="progress__title">Progress</div>
      <div className="progress__circle">
        <div className="progress__circleSlice1"></div>
        <div className="progress__circleSlice2"></div>
        <div className="progress__circleSlice3"></div>
      </div>
      <div className="progress__questions">
        <div className="progress__question">
          How often do you train.
          <input className="progress__inputField"></input>
        </div>
        <div className="progress__question">
          When was the last time you trained.
          <input className="progress__inputField"></input>
        </div>
        <div className="progress__question">
          What are your short term goals.
          <input className="progress__inputField"></input>
        </div>
        <div className="progress__question">
          What are your long term goals.
          <input className="progress__inputField"></input>
        </div>
      </div>
    </div>
  );
}
