import React from "react";
import "./HeroSection2.css";
import imageten from "./Assets/imageten.gif"; // Import the updated CSS file

const HeroSection = () => {
  return (
    <div className="hero-section2">
      <div className="hero-image2">
        <img src={imageten} alt="Service Marketplace" />
      </div>
      <div className="hero-content2">
        <h1 className="hero-title2">Welcome to Appointus</h1>
        <h2 className="hero-subtitle2">Your Ultimate Service Marketplace</h2>
        <a href="/about" className="hero-button-link2">
          <button className="hero-button2">About Us</button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
