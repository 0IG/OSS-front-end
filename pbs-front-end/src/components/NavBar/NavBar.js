// import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../logo.png";
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__container">
        {/* <nav className="navBar__left"> */}
        <ul className="navBar__itemList">
          <li className="navBar__item">MENSWEAR</li>
          <li className="navBar__item">WOMENSWEAR</li>
          <li className="navBar__item">MISC</li>
          <li className="navBar__item">SALE</li>
        </ul>
        {/* </nav> */}
        <nav className="navBar__logo">
          <img className="navBar__img" src={logo} alt="logo"></img>
        </nav>
        {/* <nav className="navBar__right"> */}
        <ul className="navBar__itemList">
          <li className="navBar__item">ENG</li>
          <li className="navBar__item">LOGIN</li>
          <li className="navBar__item">WISHLIST</li>
          <li className="navBar__item">CART</li>
        </ul>
        {/* </nav> */}
      </div>
    </div>
  );
}

{
  /* <div className="navBarTopLeft">
        <div className="navBar__mensWear">MENSWEAR</div>
        <div className="navBar__womensWear">WOMENSWEAR</div>
        <div className="navBar__misc">MISC</div>
        <div className="navBar__sale">SALE</div>
      </div>
      <div className="navBarTopRight">
        <div className="navBar__search">SEARCH</div>
        <div className="navBar__login">LOGIN</div>
        <div className="navBar__cart">SHOPPING BAG</div>
      </div> */
}
