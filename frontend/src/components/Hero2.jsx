import React from "react";
import "./Hero2.css";

const Hero2 = ({ title, subtitle, content, image }) => {
  return (
    <section className="hero2" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay2">
        <div className="hero-content2">
          <h1 className="hero-title2">{title}</h1>
          <p className="hero-subtitle2">{subtitle}</p>
          <p className="hero-text2">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
