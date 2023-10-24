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
  const [showGear, setShowGear] = useState(false);
  const [gearLoading, setGearLoading] = useState(false);
  const [deleteUserLoading, setDeleteUserLoading] = useState(false);

  // const fetchAndShowGear = (e) => {
  //   e.stopPropagation();
  //   e.preventDefualt();

  //   if (gear.length > 0) {
  //     setShowGear(true);
  //   } else {
  //     setGearLoading(true);

  //     const url =
  //       "https://cdn.dribbble.com/users/172906/screenshots/1185018/2013-08-04_21_14_41.gif";

  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setGear(data);
  //         setShowGear(true);
  //         setGearLoading(false);
  //       });
  //   }
  // };

  useEffect(() => {
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
