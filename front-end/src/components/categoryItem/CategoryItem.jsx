import React from 'react'
import { useSearchParams } from "react-router-dom";
export default function CategoryItem({item,location,urlParams}) {

    let [searchParms, setSearchParms] = useSearchParams();

    function handleSearch(e) {
        e.preventDefault();
        let params = urlParams;
        
        if (params.has("type")) {
          params.set("type", e.target.innerText.toLowerCase());
        } else {
          params.append("type", e.target.innerText.toLowerCase());
        }
        setSearchParms(params);
      }
  return (
    <li onClick={handleSearch}>
        {item}
    </li>
  )
}
