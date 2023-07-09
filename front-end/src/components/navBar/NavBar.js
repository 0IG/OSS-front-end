// import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../logo.png";
import oss from "../oss.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
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
        </ul>
        <nav className="navBar__logo">
          <Link to="/" className="navBar__img">
            <img className="navBar__img" src={oss} alt="logo"></img>
          </Link>
        </nav>
        <ul className="navBar__itemList">
          <li className="navBar__item">
            <Link to="/language" className="navBar__item">
              ENG
            </Link>
          </li>
          <li className="navBar__item">
            <Link to="/login" className="navBar__item">
              LOGIN
            </Link>
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
