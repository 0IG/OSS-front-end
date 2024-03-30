import React from "react";
import "./FiftyFifty.scss";
export default function FiftyFifty() {
  return (
    <div className="fiftyFifty">
      <div className="fiftyFifty__card">
        <img
          className="fiftyFifty__img"
          U
          src="https://evolve-mma.com/wp-content/uploads/2021/11/John-Danaher-close-up.jpg"
        />
        <div className="fiftyFifty__info">
          <div className="fiftyFifty__category">Coaches</div>
          <div className="fiftyFifty__title">
            What's the worlds best coaches advice to beginners?
          </div>
        </div>
        <div className="fiftyFifty__readMore">Read More →</div>
      </div>
      <div className="fiftyFifty__card">
        <img
          className="fiftyFifty__img"
          src="https://hips.hearstapps.com/hmg-prod/images/martins-1671554240.png?crop=0.9081761006289307xw:1xh;center,top&resize=1200:*"
        />
        <div className="fiftyFifty__info">
          <div className="fiftyFifty__category">Champions</div>
          <div className="fiftyFifty__title">
            5X ADCC Champion Gordon Ryan Humbles Giants
          </div>
        </div>
        <div className="fiftyFifty__readMore">Read More →</div>
      </div>
    </div>
  );
}
//https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAzOTM1MDg3MjM3MDgwNTcx/img_2149.jpg
