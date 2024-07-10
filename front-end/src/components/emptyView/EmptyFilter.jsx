import "./EmptyFilter.scss";
import { useNavigate } from "react-router-dom";
export default function EmptyFilter() {
  const navigate = useNavigate();
  return (
    // Confirming the commits
    <div className="emptyFilter">
      <h1 className="emptyFilter__header">
        Sorry, we couldn't find what you were looking for.
      </h1>
      <h3 className="emptyFilter__subHead">
        Shop select brands in the links below:
      </h3>
      <button
        className="emptyCart__btn"
        onClick={() => navigate("/gear?SO=mens")}
      >
        SHOP MENSWEAR
      </button>
      <button
        className="emptyCart__btn"
        onClick={() => navigate("/gear?SO=womens")}
      >
        SHOP WOMENSWEAR
      </button>
      <button
        className="emptyCart__btn"
        onClick={() => navigate("/gear?SO=misc")}
      >
        EVERYTHING ELSE
      </button>
    </div>
  );
}
