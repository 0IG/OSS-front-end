import React from "react";
import FiftyFifty from "./articles/FiftyFifty";
import Thirds from "./articles/Thirds";
import "./Home.scss";
export default function Home() {
  return (
    <div className="home">
      <FiftyFifty />
      <Thirds />
      <FiftyFifty />
    </div>
  );
}
