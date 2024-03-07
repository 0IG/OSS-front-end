import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/FireBaseConfig";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential._tokenResponse.registered === true) navigate(`/`);
        console.log("UserCreds", userCredential);
      })
      .catch((error) => {
        navigate("/signup");
        alert("User not found, please create an account");
        console.log(error);
      });
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Create Account") navigate(`/signup`);
    else navigate(`/`);
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
          <div className="signIn__createAccRedirect" onClick={handleRedirect}>
            Create Account
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
