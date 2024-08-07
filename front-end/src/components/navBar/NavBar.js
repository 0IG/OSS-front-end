import "./NavBar.scss";
import oss from "../oss.png";
import React, { useContext, useState } from "react";
import { FirebaseAuthContext } from "../accounts/firebaseAuthProvider/FirebaseAuthProvider";
import { Link } from "react-router-dom";
// Components
import SearchBar from "../searchBar/SearchBar";
import Languages from "../languages/Languages";

export default function NavBar() {
  let authenticatedUser = useContext(FirebaseAuthContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleLanguageClick = () => {
    setShowLanguage(!showLanguage);
  };

  return (
    <div className="navBar">
      <div className="navBar__left">
        <div className="navBar__hamburgerMenu">
          <div className="navBar__hamburgerMenuLine"></div>
          <div className="navBar__hamburgerMenuLineCenter"></div>
          <div className="navBar__hamburgerMenuLine"></div>
        </div>

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
      </div>
      {showSearchBar && <SearchBar />}
      {showLanguage && <Languages />}
      <nav className="navBar__logo">
        <Link to="/" className="navBar__img">
          <img className="navBar__img" src={oss} alt="logo"></img>
        </Link>
      </nav>
      <div className="navBar__right">
        <ul className="navBar__itemList">
          <li className="navBar__item">
            <Link to="/ai" className="navBar__item">
              AI
            </Link>
          </li>
          <li className="navBar__item">
            <button className="navBar__btn" onClick={handleLanguageClick}>
              ENGLISH
            </button>
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
