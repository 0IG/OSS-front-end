import React, { useContext } from "react";
import "./accountDetails.scss";
import { FirebaseAuthContext } from "../firebaseAuthProvider/FirebaseAuthProvider";

export default function AccountDetails() {
  let authenticatedUser = useContext(FirebaseAuthContext);

  return (
    <div className="accountDetails">
      <form className="accountDetails__form">
        <h1 className="accountDetails__detailsTitle">ACCOUNT DETAILS</h1>
        <p className="accountDetails__editPrompt">
          Edit your preferences below.
        </p>
        <h5 className="accountDetails__title">Account Information</h5>
        <lable className="accountDetails__label">
          First Name
          <input className="accountDetails__input"></input>
        </lable>
        <lable className="accountDetails__label">
          Last Name
          <input className="accountDetails__input"></input>
        </lable>
        <lable className="accountDetails__label">
          Email
          <input
            className="accountDetails__input"
            readOnly
            style={{ border: "1px solid #ccc", cursor: "not-allowed" }}
            placeholder={
              authenticatedUser.currentUser
                ? authenticatedUser.currentUser.email
                : "Guest User"
            }
          ></input>
        </lable>
        <h5 className="accountDetails__title">Account Password</h5>
        <lable className="accountDetails__label">
          Old Password
          <input className="accountDetails__input"></input>
        </lable>
        <lable className="accountDetails__label">
          New Password
          <input className="accountDetails__input"></input>
        </lable>
        <button className="accountDetails__btn">SAVE CHANGES</button>
      </form>
    </div>
  );
}
