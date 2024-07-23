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
          src="https://event-images.tixel.com/cdn-cgi/image/w=700,q=70/media/images/d613f9220762675fc5b77815d2c2011e_1678457578_5908_square_l.jpg"
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
