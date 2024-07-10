import { useState } from "react";
import { leapfrog } from "ldrs";

import "./Loader.scss";

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
      ></l-leapfrog>
    </div>
  );
}

export default Loader;
