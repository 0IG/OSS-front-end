import React from "react";
import "./GearShow.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function GearShow({ item }) {
  const { id } = useParams();

  return (
    <div className="gearCard">
      <Link to={`/gear/${item.id}`}>
        <div className="gearCard__imgContainer">
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
