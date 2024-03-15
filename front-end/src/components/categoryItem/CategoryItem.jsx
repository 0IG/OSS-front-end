import React from "react";
import { useSearchParams } from "react-router-dom";
import "./CategoryItem.scss";
export default function CategoryItem({ item, location, urlParams, type }) {
  let [searchParms, setSearchParms] = useSearchParams();

  function handleSearch(e) {
    e.preventDefault();
    let params = urlParams;
    //if type is category, use params.has("type"), else use params.has("designer")
    if (type === "category") {
      if (params.has("type")) {
        params.set("type", e.target.innerText.toLowerCase());
      } else {
        params.append("type", e.target.innerText.toLowerCase());
      }
    } else if (type === "designer") {
      if (params.has("designer")) {
        params.set("designer", e.target.innerText.toLowerCase());
      } else {
        params.append("designer", e.target.innerText.toLowerCase());
      }
    } else if (type == "color") {
      if (params.has("color")) {
        params.set("color", e.target.innerText);
      } else {
        params.append("color", e.target.innerText);
      }
    }

    setSearchParms(params);
  }
  function handleSelected() {
    let lowerCaseItems = item.toLowerCase();

    let selectedItems = [];
    if (searchParms.has("type")) {
      selectedItems.push(searchParms.get("type"));
    }
    if (searchParms.has("color")) {
      selectedItems.push(searchParms.get("color").toLowerCase());
    }
    if (searchParms.has("designer")) {
      selectedItems.push(searchParms.get("designer"));
    }

    if (selectedItems.includes(lowerCaseItems)) {
      return " active";
    } else {
      return "";
    }
  }
  return (
    <li onClick={handleSearch} className={"listItem" + handleSelected()}>
      {item}
    </li>
  );
}
