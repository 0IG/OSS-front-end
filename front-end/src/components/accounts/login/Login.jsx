import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate(`/signup`);
  };

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form">
          <div className="login__title">LOGIN OR CREATE ACCOUNT</div>
          <div className="login__inputTitle">Email address</div>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="login__inputField"
          ></input>
          <button className="login__btn" onClick={(e) => handleRedirect(e)}>
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
}
