import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GearShow from "../gearShow/GearShow";
import "./GearIndex.scss";
import LeftPanel from "../leftPanel/LeftPanel";

const GearIndex = ({}) => {
  const [gear, setGear] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/gear/")
      .then((response) => {
        setGear(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="gearIndex">
      <LeftPanel />
      <div className="gearIndex__container">
        {gear.map((item) => {
          return <GearShow item={item} />;
        })}
      </div>
    </div>
  );
};

export default GearIndex;
