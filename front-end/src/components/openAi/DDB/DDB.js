import React from "react";
import "./DDB.scss";

export default function DDB() {
  return (
    <div className="ddb">
      <div className="ddb__inputContainer">
        <div className="ddb__inputField">
          <input className="ddb__input" placeholder="SEARCH"></input>
        </div>
      </div>
      <div className="ddb__videoContainer">
        <div className="ddb__video" src="">
          Video
        </div>
      </div>
      <div className="ddb__transitionContainer">
        <div className="ddb__transition">TRANSITIONS</div>
        <btn className="ddb__transition">ARMBAR</btn>
        <btn className="ddb__transition">RNC</btn>
        <btn className="ddb__transition">KIMURA</btn>
        <btn className="ddb__transition">TRIANGLE</btn>
        <div className="ddb__transition">
          <btn className="ddb__transitionMoreBtn">o o o</btn>
        </div>
      </div>
    </div>
  );
}
