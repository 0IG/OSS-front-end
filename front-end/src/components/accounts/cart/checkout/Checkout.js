import React, { useContext } from "react";
import { FirebaseAuthContext } from "../../firebaseAuthProvider/FirebaseAuthProvider";
import "./Checkout.scss";
import { EmailAuthCredential, EmailAuthProvider } from "firebase/auth";

export default function Checkout() {
  let authenticatedUser = useContext(FirebaseAuthContext);
  let userEmail = authenticatedUser.currentUser.email;
  return (
    <div className="checkout">
      <div className="checkout__loggedAs">LOGGED IN AS</div>
      <div className="checkout__userEmail">{userEmail}</div>
      <div className="checkout__swapAcc">
        Not your account?
        <span>Sign in as another user.</span>
      </div>
      <div className="checkout__btn">
        <button className="checkout__btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}
