import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/FireBaseConfig";
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signIn">
      <div className="signIn__container">
        <form onSubmit={signIn} className="signIn__form">
          <h1 className="signIn__logTitle">LOGIN</h1>
          <h2 className="signUp__inputEmailTitle">Email address</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signIn__inputEmail"
          ></input>
          <div className="signIn__inputPasswordTtile"></div>
          <h2 className="signUp__inputPasswordTitle">Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signIn__inputPassword"
          ></input>
          <button type="submit" className="signIn__btn">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
