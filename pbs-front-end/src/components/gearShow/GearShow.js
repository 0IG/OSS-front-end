import React from "react";
import "./GearShow.scss";
import { Link } from "react-router-dom";
function GearShow({ item }) {
  return (
    <div className="gearCard">
      <Link to={`/mens/${item.id}`}>
        <div classname="gearCard__imgContainer">
          <img className="gearCard__img" src={item.image} />
        </div>
        <div className="gearCard__titleContainer">
          <h2 className="gearCard__title">{item.name}</h2>
        </div>
        <div className="gearCard__priceContainer">
          <h3 className="gearCard__price">${item.price}</h3>
        </div>
      </Link>
    </div>
  );
}

export default GearShow;
