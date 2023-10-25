import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GearShow from "../Items/show/gearShow/GearShow";
import "./GearIndex.scss";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
import { useParams, useSearchParams } from "react-router-dom";
import Loader from "../loader/Loader";
let API = process.env.REACT_APP_API_URL;

const GearIndex = ({ SO }) => {
  const [gear, setGear] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [gearLoading, setGearLoading] = useState(false);
  const [showGear, setGearShow] = useState(true);
  const [deleteUserLoading, setDeleteUserLoading] = useState(false);

  useEffect(() => {
    setGearLoading(true);
    axios
      .get(`${API}/gear?${searchParams}`)
      .then((response) => {
        setGear(response.data.payload);
        setGearLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  if (gearLoading) {
    return <Loader />;
  } else {
    return (
      <div className="gearIndex">
        <LeftPanel />
        <div
          className="gearIndex__container"
          style={{ display: showGear ? "grid" : "none" }}
        >
          {gear.map((item) => {
            return <GearShow key={item.id} item={item} />;
          })}
        </div>
        <RightPanel />
      </div>
    );
  }
};
export default GearIndex;
