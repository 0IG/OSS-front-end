import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { leapfrog } from "ldrs";

import "./Loader.scss";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "grey",
};

leapfrog.register();

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#808080");

  return (
    <div className="Loader">
      <l-leapfrog
        size="200"
        speed="2.5"
        color={color}
        loading={loading}
        cssOverride={override}
      ></l-leapfrog>
    </div>
  );
}

export default Loader;
