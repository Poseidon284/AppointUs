import React from "react";
import "./Heroimg.css";
import imagetwelve from "./Assets/imagetwelve.jpg";

function Heroimg() {
  return (
    <div className="unique-hero-container">
      <img src={imagetwelve} alt="Unique Hero" className="unique-hero-image" />
    </div>
  );
}

export default Heroimg;
