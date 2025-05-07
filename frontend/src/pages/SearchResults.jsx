import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SearchResults.css";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import ContactForm from "../components/Contactform";

// Import images from assets folder
import PLUMBERONE from "../assets/IMAGESEARCH.gif";
import PLUMBERTWO from "../assets/PLUMBERTWO.avif";
import PLUMBERTHREE from "../assets/PLUMBERTHREE.jpg";
import PLUMBERFOUR from "../assets/PLUMBERFOUR.jpg";
import PLUMBERFIVE from "../assets/PLUMBERFIVE.jpg";
import PLUMBERSIX from "../assets/PLUMBERSIX.webp";

const SearchResults = () => {
  const location = useLocation();
  const { query, results } = location.state || { query: "", results: [] };

  console.log(results);

  return (
    <div>
      <Navbar2 />
      <div className="query-result-container">
        <div className="query-result-grid">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="query-result-card">
                <img
                  src={PLUMBERONE} // Add link to AppointUs Logo
                  alt={result.ServiceName}
                  className="query-result-image"
                />
                <div className="query-result-content">
                  <h2 className="query-result-service-name">
                    {result.ServiceName}
                  </h2>

                  <p className="query-result-address">{result.Address}</p>
                  <p className="query-result-rating">
                    Rating: ⭐ {result.Rating}
                  </p>
                  <p className="query-result-price-range">
                    Current Price: ₹{Math.floor((result.PriceRange.MinPrice+result.PriceRange.MaxPrice)/2)}
                  </p>

                  <p className="query-result-description">
                    {result.Description}
                  </p>

                  {/* Dynamic Link to the company page */}
                  <Link
                    to="/company"
                    state={{
                      companyName: result.ServiceName,
                      address: result.Address,
                      ratings: result.Rating,
                      description: result.Description
                    }}
                  >
                    <button className="company-page-button">
                      Go to Company Page
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="query-result-no-results">No results found.</p>
          )}
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default SearchResults;