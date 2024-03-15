import React, { useContext } from "react";
import { FirebaseAuthContext } from "../../firebaseAuthProvider/FirebaseAuthProvider";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";

export default function Checkout() {
  const naviagate = useNavigate();
  let authenticatedUser = useContext(FirebaseAuthContext);

  return (
    <div className="checkout">
      <div className="checkout__loggedAs">LOGGED IN AS</div>
      <div className="checkout__userEmail">
        {authenticatedUser.currentUser
          ? authenticatedUser.currentUser.email
          : "Guest User"}
      </div>
      <div className="checkout__swapAcc">
        Not your account?
        <span>Sign in as another user.</span>
      </div>
      <div className="checkout__btn">
        <button
          className="checkout__btn"
          onClick={(e) => naviagate("/checkout")}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}
