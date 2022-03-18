import React from "react";
import "./BoxItem.css";
import { Link } from "react-router-dom";

function BoxItem() {
  return (
    <>
      <li className="box_item">
        <Link to={"./nerdnews"} className="box_item_link">
          <img
            src="/Images/Star Wars.jpeg"
            alt="Nerdy"
            className="box_item_img"
          />
        </Link>
      </li>
    </>
  );
}

export default BoxItem;
