import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div>
      <section className="navBar__section">
        <div className="navBar__center">
          <h3 className="navBar__link">
            <Link to="/about">About</Link>
          </h3>
          <h3 className="navBar__logo">
            <Link to="/">B J J G</Link>
          </h3>
          <h3 className="navBar__link">
            <Link to="/gear">Gear</Link>
          </h3>
          <h3 className="navBar__link">
            <Link to="/account/login">Login</Link>
          </h3>
          {/* <h2 className="navBar__text">Postion Before Submission</h2> */}
        </div>
      </section>
    </div>
  );
}
