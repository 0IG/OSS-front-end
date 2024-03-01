import React from 'react'
import { useSearchParams } from "react-router-dom";
export default function CategoryItem({item,location,urlParams, type}) {

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
        } else if( type === "designer") {
        if (params.has("designer")) {
          params.set("designer", e.target.innerText.toLowerCase());
        } else {
          params.append("designer", e.target.innerText.toLowerCase());
        }
      }

        setSearchParms(params);
      }
  return (
    <li onClick={handleSearch}>
        {item}
    </li>
  )
}
