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
        <div className="gearCard__designerContainer">
          <div className="gearCard__itemDesigner">
            {item.designed_by?.toUpperCase()}
          </div>
        </div>
        <div className="gearCard__titleContainer">
          <div className="gearCard__title">{item.name}</div>
        </div>
        <div className="gearCard__priceContainer">
          <div className="gearCard__price">${item.price}</div>
        </div>
      </Link>
    </div>
  );
}

export default GearShow;
