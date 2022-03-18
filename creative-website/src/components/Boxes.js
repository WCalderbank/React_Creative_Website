import React from "react";

import "./Boxes.css";
import BoxItem from "./BoxItem";

function Boxes() {
  return (
    <div className="boxes">
      <h1 className="star"> Lets Explore a galaxy far far away !</h1>
      <div className="boxes_container">
        <div className="boxes_wrapper">
          <ul className="boxes_items">
            <BoxItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
