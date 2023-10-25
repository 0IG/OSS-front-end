import React from "react";

import "./EmptyView.scss";

const styleObj = {
  center: {
    display: "table",
    padding: "200px 0",
  },
};

function EmptyView(props) {
  const { text = "No Results", center } = props;
  return (
    <div style={center && styleObj.center} className="emptyView">
      {text}
    </div>
  );
}

export default EmptyView;
