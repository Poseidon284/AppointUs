import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero3 from "../components/Hero3";
import ResultCard from "../components/ResultCard";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Plumbers = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/plumbing/"); // Replace with your API URL
        const data = await response.json();
        console.log(data); // Log the response to check the structure

        // The data is inside the "message" key, so extract it
        setBusinesses(data.message); // Set the fetched businesses into state
      } catch (error) {
        console.error("Error fetching business data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <Navbar />
      <Hero3 />
      <div className="resultsection">
        {businesses.map((business, index) => (
          // Set the key on the Link component
          <Link to="/company" key={index}>
            <ResultCard
              image={business.image}
              name={business.name}
              whatsappLink={business.whatsapp_link} // Adjusted to match key in the response
              phone={business.phone}
              address={business.address}
              rating={business.rating}
              link={business.link}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Plumbers;
