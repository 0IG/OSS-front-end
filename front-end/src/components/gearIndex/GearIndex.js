import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GearShow from "../Items/show/gearShow/GearShow";
import "./GearIndex.scss";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
import { useParams, useSearchParams } from "react-router-dom";
let API = process.env.REACT_APP_API_URL;
const GearIndex = ({ SO }) => {
  const [gear, setGear] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // console.log(API);
    // if (searchParams.get("SO")) {
    //   API += `?SO=${searchParams.get("SO")}`;
    // }
    axios
      .get(`${API}/gear?${searchParams}`)
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
          return <GearShow key={item.id} item={item} />;
        })}
      </div>
      <RightPanel />
    </div>
  );
};

export default GearIndex;
