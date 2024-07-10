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
          src="https://external-preview.redd.it/rZIzgoKEcMtH10HYgXej_7Hh3mUmI3SO_e4BDl2Oxy0.jpg?auto=webp&s=37036634504d5fbba1500f7fece61a65a0a2d09c"
        />
        <div className="thirds__info">
          <div className="thirds__category">All-Stars</div>
          <div className="thirds__title">
            Craig Jones starts his own grappling invitational
          </div>
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
            Eddie bravo talks about how smoking before class actually improves
            your game
          </div>
        </div>
        <div className="thirds__readMore">Read More →</div>
      </div>
    </div>
  );
}
