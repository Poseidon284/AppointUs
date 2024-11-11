import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ResultCard.css";

const ResultCard = ({
  image,
  name,
  whatsappLink,
  phone,
  address,
  rating,
  link,
}) => {
  return (
    <Link to={link} className="result-card-link">
      {" "}
      {/* Wrapping the card with Link */}
      <div className="result-card">
        <img src={image} alt={`${name} image`} className="result-card-image" />
        <div className="result-card-content">
          <h2 className="result-card-name">{name}</h2>
          <p className="result-card-address">{address}</p>
          <p className="result-card-phone">
            <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
          </p>
          <p className="result-card-whatsapp">
            <strong>WhatsApp:</strong>{" "}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Contact on WhatsApp
            </a>
          </p>
          <div className="result-card-rating">
            <span className="result-card-rating-stars">
              {"⭐".repeat(rating)}
            </span>
            <span className="result-card-rating-number">({rating})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
