import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./MainSection.css";
import cover from "../components/vids/static.mp4";

function MainSection() {
  return (
    <div className="main-container">
      <video autoPlay loop muted>
        <source src={cover} type="video/mp4" />
      </video>
      <h1 className="main-title">Explore Everything</h1>
      <h3 className="main-sub">Go Full Geek</h3>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Lets Go
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch <i className="fas fa-video" />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
