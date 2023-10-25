import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loader.scss";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "grey",
};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#808080");

  return (
    <div className="Loader">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
