import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchBar.scss";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/gear?${query}`)
      .then((response) => {
        setQuery(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  const validation = (e) => {
    e.preventDefault();
    const filterSearch = query.filter((item) => {
      return item.designed_by === input.toLowerCase();
    });
    if (filterSearch.length > 0) {
      navigate(`/gear?designer=${input}`);
    } else {
      alert("Designer not found");
    }
  };

  const handleClose = (e) => {
    return false;
  };

  return (
    <div className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__categories">
          <div className="searchBar__option">MENSWEAR</div>
          <div className="searchBar__option">WOMENSWEAR</div>
          <div className="searchBar__option">EVERYTHING ELSE</div>
        </div>
        <form className="searchBar__midSearch" onSubmit={validation}>
          <input
            placeholder="SEARCH DESIGNER"
            type="text"
            className="searchBar__input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="searchBar__inputBtn"
            onClick={(e) => handleClose(e.target.value)}
          >
            CLOSE
          </button>
        </form>
        <div className="searchBar__saleToggle">
          <input type="checkbox" className="searchBar__checkboxToggle" />
          <label className="searchBar__checkboxLabel">SALE ONLY</label>
        </div>
      </div>
    </div>
  );
}
