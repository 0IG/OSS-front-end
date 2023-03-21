// import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../logo.png";
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__container">
        <ul className="navBar__itemList">
          <li className="navBar__item">MENSWEAR</li>
          <li className="navBar__item">WOMENSWEAR</li>
          <li className="navBar__item">MISC</li>
          <li className="navBar__item">SALE</li>
        </ul>
        <nav className="navBar__logo">
          <img className="navBar__img" src={logo} alt="logo"></img>
        </nav>
        <ul className="navBar__itemList">
          <li className="navBar__item">ENG</li>
          <li className="navBar__item">LOGIN</li>
          <li className="navBar__item">WISHLIST</li>
          <li className="navBar__item">CART</li>
        </ul>
      </div>
    </div>
  );
}
