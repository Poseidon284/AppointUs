import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Searchsection.css";

const Searchsection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api-searchbar/",
        { query }
      );

      const results = response.data.results || [];

      navigate("/results", { state: { query, results } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchsection;