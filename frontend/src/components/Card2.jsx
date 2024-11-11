import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Card2.css";

const Card2 = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="card2">
      {" "}
      {/* Use Link for internal navigation */}
      <div className="card-image-container2">
        <img src={image} alt={title} className="card-image2" />
        <div className="card-overlay2">
          <div className="card-text2">
            <h3 className="card-title2">{title}</h3>
            <p className="card-description2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card2;
