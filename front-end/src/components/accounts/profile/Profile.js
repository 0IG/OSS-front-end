import React from "react";
import AuthDetails from "../../auth/AuthDetails";
import "./Profile.scss";
import { auth } from "../../firebaseConfig/FireBaseConfig";

export default function Profile() {
  const checkUser = () => {
    const user = AuthDetails(auth);
  };
  return (
    <div className="profile">
      <div className="profile__form">
        <div className="profile__title">LOGIN OR CREATE ACCOUNT</div>
        <div className="profile__inputTitle">Email address</div>
        <input className="profile__inputField"></input>
        <div className="profile__btn">CONTINUE</div>
      </div>
    </div>
  );
}
