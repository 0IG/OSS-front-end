import "./EmptyFilter.scss";
import { useNavigate } from "react-router-dom";
export default function EmptyFilter() {
  const navigate = useNavigate();
  return (
    <div className="emptyFilter">
      <img
        className="emptyFilter__butters"
        src="https://media3.giphy.com/media/mTlzVSZWPIdbKeKjVR/giphy.gif?cid=6c09b952eqvja2lowc0oz48qe2ywwn2kslkjuha4t0og420m&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
      />
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
