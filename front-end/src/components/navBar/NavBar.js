import "./NavBar.scss";
import oss from "../oss.png";
import React, { useContext, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { FirebaseAuthContext } from "../accounts/firebaseAuthProvider/FirebaseAuthProvider";
import { Link } from "react-router-dom";

export default function NavBar() {
  let authenticatedUser = useContext(FirebaseAuthContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="navBar">
      <div className="navBar__hamburgerMenu">
        <div className="navBar__hamburgerMenuLine"></div>
        <div className="navBar__hamburgerMenuLineCenter"></div>
        <div className="navBar__hamburgerMenuLine"></div>
      </div>

      <div className="navBar__container">
        <ul className="navBar__itemList">
          <li className="navBar__item">
            <Link to="/gear?SO=mens" className="navBar__item">
              MENSWEAR
            </Link>
          </li>
          <li className="navBar__item">
            <Link to="/gear?SO=womens" className="navBar__item">
              WOMENSWEAR
            </Link>
          </li>
          <li className="navBar__item">
            <Link to="/gear?SO=misc" className="navBar__item">
              MISC
            </Link>
          </li>
          <li className="navBar__item">
            <Link to="/sale" className="navBar__item">
              SALE
            </Link>
          </li>
          <li className="navBar__item">
            <button className="navBar__btn" onClick={handleSearchClick}>
              SEARCH
            </button>
          </li>
        </ul>
        {showSearchBar && <SearchBar />}
        <nav className="navBar__logo">
          <Link to="/" className="navBar__img">
            <img className="navBar__img" src={oss} alt="logo"></img>
          </Link>
        </nav>
        <ul className="navBar__itemList">
          <li className="navBar__item">
            <Link to="/ai" className="navBar__item">
              AI
            </Link>
          </li>
          <li className="navBar__item">
            <Link to="/language" className="navBar__item">
              ENG
            </Link>
          </li>
          <li className="navBar__item">
            {authenticatedUser.currentUser ? (
              <Link to="/auth" className="navBar__item">
                ACCOUNT
              </Link>
            ) : (
              <Link to="/signin" className="navBar__item">
                LOGIN
              </Link>
            )}
          </li>
          <li className="navBar__item">
            <Link to="/wishlist" className="navBar__item">
              WISHLIST
            </Link>
          </li>
          <li className="navBar__item">
            <Link to="/cart" className="navBar__item">
              CART
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
