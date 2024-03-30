import React from "react";
import "./Thirds.scss";
export default function Thirds() {
  return (
    <div className="thirds">
      <div className="thirds__card">
        <img
          className="thirds__img"
          src="https://gbjacksonville.com/wp-content/uploads/2021/06/Rickson-Gracie.jpg"
        />
        <div className="thirds__info">
          <div className="thirds__category">Legends</div>
          <div className="thirds__title">
            Rickson speaks about the current state of the sport
          </div>
        </div>
        <div className="thirds__readMore">Read More →</div>
      </div>
      <div className="thirds__card">
        <img
          className="thirds__img"
          src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAzOTM1MDg3MjM3MDgwNTcx/img_2149.jpg"
        />
        <div className="thirds__info">
          <div className="thirds__category">All-Stars</div>
          <div className="thirds__title">Gary Tonon on his ONE debut</div>
        </div>
        <div className="thirds__readMore">Read More →</div>
      </div>
      <div className="thirds__card">
        <img
          className="thirds__img"
          src="https://bjjfanatics.com/cdn/shop/articles/eddie-bravo-bjj-fanatics-instructor_1024x1024.jpg?v=1606157940"
        />
        <div className="thirds__info">
          <div className="thirds__category">Coaches</div>
          <div className="thirds__title">
            Eddie bravo talks about how smokng before class actual improves your
            game
          </div>
        </div>
        <div className="thirds__readMore">Read More →</div>
      </div>
    </div>
  );
}
