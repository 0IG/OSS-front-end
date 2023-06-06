import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="rickson">
        <div className="rickson__article">
          <div className="rickson__img">
            <img
              src="https://www.attacktheback.com/wp-content/uploads/2019/11/rickson-gracie-bjj.jpeg"
              alt="rickson-gracie"
            ></img>
            <div className="rickson__type">Legends</div>
            <div className="rickson__header">Rickson Gracie 400-0 Record ?</div>
            <div className="rickson__readMore">Read More →</div>
          </div>
        </div>
      </div>
      <div className="tye">
        <div className="tye__article">
          <div className="tye__img">
            <img src="https://i.imgur.com/LPZ6NLk.jpg" alt="tye--ruotolo"></img>
          </div>
          <div className="tye__type">Rising Stars</div>
          <div className="tye__header">
            Tye Ruotolo taking massive win against Pedro Marinho.
          </div>
          <div className="tye__readMore">Read More →</div>
        </div>
      </div>
    </div>
  );
}
