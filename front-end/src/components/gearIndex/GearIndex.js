import React, { useState, useEffect } from "react";
import axios from "axios";
import GearShow from "../Items/show/gearShow/GearShow";
import { useParams, useSearchParams } from "react-router-dom";
// Styles
import "./GearIndex.scss";
// Components
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
import Loader from "../loader/Loader";
import EmptyFilter from "../emptyView/EmptyFilter";

const GearIndex = ({ SO }) => {
  const [gear, setGear] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [gearLoading, setGearLoading] = useState(false);
  const [showGear, setGearShow] = useState(true);
  const [deleteUserLoading, setDeleteUserLoading] = useState(false);

  let API = process.env.REACT_APP_API_URL;

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
  } else if (gear.length === 0) {
    return <EmptyFilter />;
  } else {
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
  }
};
export default GearIndex;
