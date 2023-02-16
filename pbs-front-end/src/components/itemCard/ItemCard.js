import React, { useState } from "react";
import "./ItemCard.scss";
import axios from "axios";

export const ItemCard = ({ item }) => {
  const [gear, setGear] = useState([]);
  axios
    .get("/http://localhost:9000/gear/")
    .then((response) => {
      setGear(response.data.payload);
    })
    .catch((error) => {
      console.log(error);
    });

  const {
    id,
    name,
    price,
    rating,
    is_user_submitted,
    is_expensive,
    image,
    link,
  } = item;

  return (
    <div className="itemCard">
      <div className="itemCard__name"></div>
      <div className="itemCard__price"></div>
      <div className="itemCard__rating"></div>
      <div className="itemCard__image">
        <img src=""></img>
      </div>
      <div className="itemCard__link"></div>
    </div>
  );
};
