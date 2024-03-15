import React, { useContext } from "react";
import "./ItemDetail.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import { CartContext } from "../accounts/cart/cartContext/CartContext";

const API = process.env.REACT_APP_API_URL;

const ProccedToCheckoutButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        navigate("/cart");
      }}
      className="itemDetail__atbBtn"
    >
      PROCEED TO CHECKOUT
    </button>
  );
};

export default function ItemDetail() {
  const cart = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [info, setInfo] = useState({});
  const [gearLoading, setGearLoading] = useState(false);
  const [proccedToCheckout, setProccedToCheckout] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setGearLoading(true);
    axios
      .get(`${API}/gear/${productId}/`)
      .then((response) => {
        setInfo(response.data.payload);
        setGearLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSizeChange = (e) => {
    if (e.target.value === "SELECT A SIZE") {
      setSelectedSize(null);
      console.log("Please select a size");
    } else {
      setSelectedSize(e.target.value);
      console.log(`Selected size: ${e.target.value}`);
    }
  };

  if (gearLoading) {
    return <Loader />;
  } else {
    return (
      <div className="itemDetail">
        <div className="itemDetail__details">
          <div className="itemDetail__itemDesigner">
            {info.designed_by?.toUpperCase()}
          </div>
          <div className="itemDetail__itemDesc">{info.description}</div>
          <div className="itemDetail__detail">{info.detail1}</div>
          <div className="itemDetail__detail">{info.detail2}</div>
          <div className="itemDetail__color">Supplier color: {info.color}</div>
          <div className="itemDetail__materials">{info.materials}</div>
          <div className="itemDetail__manufactured">
            Made in {info.manufactured}.
          </div>
        </div>
        <div className="itemDetail__image">
          <img
            className="itemDetail__img"
            src={`${info.image}`}
            alt="itemImage"
          />
        </div>
        <div className="itemDetail__addToCart">
          <div className="itemDetail__price">${info.price} USD</div>
          <select
            className="itemDetail__select"
            onChange={(e) => handleSizeChange(e)}
          >
            <option className="" selected disabled value="select a size">
              SELECT A SIZE
            </option>
            <option className="" value="s">
              S
            </option>
            <option className="" value="m">
              M
            </option>
            <option className="" value="l">
              L
            </option>
            <option className="" value="xl">
              XL
            </option>
          </select>
          {/* Add To Bag Btn */}
          {proccedToCheckout ? (
            <ProccedToCheckoutButton />
          ) : (
            <button
              disabled={selectedSize === null}
              className="itemDetail__atbBtn"
              onClick={() => {
                setProccedToCheckout(true);
                cart.addItem({ ...info, size: selectedSize });
              }}
            >
              ADD TO BAG
            </button>
          )}
          {/* Add To Wishlist Btn */}
          <button className="itemDetail__atwBtn">ADD TO WISHLIST</button>
        </div>
      </div>
    );
  }
}
