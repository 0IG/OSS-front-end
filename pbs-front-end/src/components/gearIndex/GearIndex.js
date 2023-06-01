import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GearShow from "../Items/show/gearShow/GearShow";
import "./GearIndex.scss";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/rightPanel";
import { useParams, useSearchParams } from "react-router-dom";

const GearIndex = ({ SO }) => {
  const [gear, setGear] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let API = `http://localhost:9000/gear`;
    if (searchParams.get("SO")) {
      API += `?SO=${searchParams.get("SO")}`;
    }
    axios
      .get(API)
      .then((response) => {
        setGear(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  return (
    <div className="gearIndex">
      <LeftPanel />
      <div className="gearIndex__container">
        {gear.map((item) => {
          return <GearShow item={item} />;
        })}
      </div>
      <RightPanel />
    </div>
  );
};

export default GearIndex;
