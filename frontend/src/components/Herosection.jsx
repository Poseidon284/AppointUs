import React from "react";
import { Link } from "react-router-dom";
import "./herosection.css";

const Herosection = ({
  title = "Welcome to Your Service Marketplace",
  subtitle = "Connecting you with every service, anytime, anywhere.",
  buttonLabel = "Get Started",
  buttonLink = "/services",
}) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <Link to={buttonLink} className="hero-button-link">
          <button className="hero-button">{buttonLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
