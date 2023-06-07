import React from "react";
import "./ItemDetail.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
export default function ItemDetail() {
  const [info, setInfo] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`${API}/gear/${productId}/`)
      .then((response) => {
        setInfo(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="itemDetail">
      <div className="itemDetail__details">
        <div className="itemDetail__itemDesigner">{info.name}</div>
        <div className="itemDetail__itemDesc">{info.description}</div>
        <div className="itemDetail__itemInfo">{info.description}</div>
        <div className="itemDetail__detail">{info.detail1}</div>
        <div className="itemDetail__detail">{info.detail2}</div>
        <div className="itemDetail__color">Supplier color: {info.color}</div>
        <div className="itemDetail__materials">{info.materials}</div>
        <div className="itemDetail__manufactured">
          Made in {info.manufactured}.
        </div>
      </div>
      <div className="itemDetail__image">
        <img className="itemDetail__img" src={`${info.image}`} alt="image" />
      </div>
      <div className="itemDetail__addToCart">
        <div className="itemDetail__price">${info.price} USD</div>
        <select className="itemDetail__select">
          <option className="">SELECT A SIZE</option>
          <option className="">S</option>
          <option className="">M</option>
          <option className="">L</option>
          <option className="">XL</option>
        </select>
        {/* Add To Bag Btn */}
        <button className="itemDetail__atbBtn">ADD TO BAG</button>
        {/* Add To Wishlist Btn */}
        <button className="itemDetail__atwBtn">ADD TO WISHLIST</button>
      </div>
    </div>
  );
}
