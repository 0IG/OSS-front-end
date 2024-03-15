import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyCart.scss";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <div className="emptyCart__container">
        <div className="emptyCart__title">SHOPPING BAG</div>
        <div className="emptyCart__subtitle">Your shopping bag is empty</div>
        <div className="emptyCart__loginPrompt">
          <span className="LogInSpan" onClick={() => navigate("/signup")}>
            Log in
          </span>{" "}
          to view your bag.
        </div>
        <button
          className="emptyCart__btn"
          onClick={() => navigate("/gear?SO=mens")}
        >
          SHOP MENSWEAR
        </button>
        <button
          className="emptyCart__btn"
          onClick={() => navigate("/gear?SO=womens")}
        >
          SHOP WOMENSWEAR
        </button>
        <button
          className="emptyCart__btn"
          onClick={() => navigate("/gear?SO=misc")}
        >
          EVERYTHING ELSE
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
