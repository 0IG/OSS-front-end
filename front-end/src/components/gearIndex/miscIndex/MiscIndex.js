import "./MiscIndex.scss";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LeftPanel from "../../leftPanel/LeftPanel";
import RightPanel from "../../rightPanel/RightPanel";
let API = process.env.REACT_APP_API_URL;
const MiscIndex = ({}) => {
  const [misc, setMisc] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/gear/misc?${misc.id}`)
      .then((response) => {
        setMisc(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="miscIndex">
      <LeftPanel />
      <div className="miscIndex__container">
        {misc.map((item) => {
          return <MiscIndex key={item.id} item={item} />;
        })}
      </div>
      <RightPanel />
    </div>
  );
};

export default MiscIndex;
