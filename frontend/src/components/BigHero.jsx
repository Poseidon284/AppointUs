import React from "react";
import "./BigHero.css";

const BigHero = ({ title, subtitle }) => {
  return (
    <div className="big-hero-container">
      <h1 className="big-hero-title">{title}</h1>
      <p className="big-hero-subtitle">{subtitle}</p>
    </div>
  );
};

export default BigHero;
