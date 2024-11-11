import React from "react";
import "./Searchsection.css";

const Searchsection = () => {
  return (
    <div className="hero-container">
      <div className="search-box">
        <h1 className="hero-heading">Find What You Need</h1>
        <p className="hero-subheading">
          Enter your query below and discover insights
        </p>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Enter your query here..."
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Searchsection;
