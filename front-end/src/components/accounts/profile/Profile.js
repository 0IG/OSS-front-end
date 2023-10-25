import React from "react";
import "./Profile.scss";

export default function Profile() {
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
