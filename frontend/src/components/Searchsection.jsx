import React, { useState } from "react";
import axios from "axios";
import "./Searchsection.css";

const Searchsection = () => {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api-searchbar/", { query });
      setResults(response.data.results || []); 
      console.log(response.data)
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
        <div className="results-container">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchsection;