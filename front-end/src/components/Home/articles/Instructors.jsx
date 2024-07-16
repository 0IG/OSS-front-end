import React from "react";
import "./Instructors.scss";

export default function instructors() {
  return (
    <div className="instructors">
      <div className="instructors__carousel-container">
        <div className="instructors__card">
          <img
            className="instructors__img"
            U
            src="https://renzogracieacademy.com/wp-content/uploads/2024/05/Mike_v1-scaled.jpg"
          />
          <div className="instructors__info">
            <div className="instructors__category">Coaches</div>
            <div className="instructors__title">Mike Jaramillo</div>
          </div>
          <div className="instructors__readMore">Read More →</div>
        </div>
        <div className="instructors__card">
          <img
            className="instructors__img"
            src="https://i.imgur.com/JBNrHVf.png"
          />
          <div className="instructors__info">
            <div className="instructors__category">Coaches</div>
            <div className="instructors__title">Doug Pelinkovic</div>
          </div>
          <div className="instructors__readMore">Read More →</div>
        </div>
        <div className="instructors__card">
          <img
            className="instructors__img"
            src="https://i.imgur.com/eB52YnZ.png"
          />
          <div className="instructors__info">
            <div className="instructors__category">Coaches</div>
            <div className="instructors__title">Marcelo Garcia</div>
          </div>
          <div className="instructors__readMore">Read More →</div>
        </div>
        <div className="instructors__card">
          <img
            className="instructors__img"
            src="https://i.imgur.com/rvBJ4QQ.png"
          />
          <div className="instructors__info">
            <div className="instructors__category">Champions</div>
            <div className="instructors__title">Matt Serra</div>
          </div>
          <div className="instructors__readMore">Read More →</div>
        </div>
      </div>
    </div>
  );
}
