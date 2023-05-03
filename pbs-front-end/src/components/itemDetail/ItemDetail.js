import React from "react";
import "./ItemDetail.scss";
export default function ItemDetail() {
  return (
    <div className="itemDetail">
      <div className="itemDetail__itemDesigner">MAISON MARGIELA</div>
      <div className="itemDetail__itemDesc">Silver Engraved Ring</div>
      <div className="itemDetail__itemInfo">
        Band ring in silver-tone brass.
      </div>
      <div className="itemDetail__detail">
        Red crystal-cut accents and filigree detailing throughout.
      </div>
      <div className="itemDetail__detail">Logo engraved at inner band</div>
      <div className="itemDetail__image">
        <img
          className="itemDetail__img"
          src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222168M147026_1/maison-margiela-silver-engraved-ring.jpg"
          alt="image"
        />
      </div>
      <div className="itemDetail__addToCart">
        <div className="itemDetail__price">$390 USD</div>
        <select className="itemDetail__select">
          <option className="">SELECT A SIZE</option>
        </select>
        {/* Add To Bag Btn */}
        <button className="itemDetail__atbBtn">ADD TO BAG</button>
        {/* Add To Wishlist Btn */}
        <button className="itemDetail__atwBtn">ADD TO WISHLIST</button>
      </div>
    </div>
  );
}
