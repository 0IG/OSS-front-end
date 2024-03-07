import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/FireBaseConfig";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signUp">
      <div className="signUp__container">
        <form onSubmit={signUp} className="signUp__form">
          <h1 className="signUp__createTitle">CREATE AN ACCOUNT</h1>
          <h2 className="signUp__inputEmailTitle">Email address</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signUp__inputEmail"
          ></input>
          <h2 className="signUp__inputPasswordTitle">Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signUp__inputPassword"
          ></input>
          <button type="submit" className="signUp__btnCreate">
            CREATE AN ACCOUNT
          </button>
          <button
            type="submit"
            className="signUp__btnBack"
            onClick={() => navigate(-1)}
          >
            BACK
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
