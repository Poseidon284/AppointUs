import React from "react";
import "./Results.css";
import imageone from "./Assets/imageone.jpg";
import imagetwo from "./Assets/imagetwo.jpg";
import imagethree from "./Assets/imagethree.jpg";
import imagefour from "./Assets/imagefour.jpg";
import imagefive from "./Assets/imagefive.jpg";
import imagesix from "./Assets/imagesix.jpg";
import imageseven from "./Assets/imageseven.jpg";
import imageeight from "./Assets/imageeight.jpg";

const Results = ({
  title = "Castrol Auto Service - A3 Auto Garage",
  rating = "4.6",
  location = "Urumandapalayam Road, Gn Mills, Coimbatore",
  services = "Doorstep Service",
  contactNumber = "08971373301",
  enquiryCount = 91,
  imageUrl = imageone,
  logoUrl = "https://example.com/castrol-logo.png", // Placeholder logo
}) => {
  return (
    <div className="service-card" role="article">
      <div className="service-card-image">
        <img className="Resultcard" src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className="service-card-content">
        <h2 className="service-card-title">{title}</h2>
        <div className="service-card-rating">
          <span>{rating}</span>
          <span className="verified-badge" aria-label="Verified Service">
            Verified
          </span>
          <span className="top-search" aria-label="Top Search">
            Top Search
          </span>
        </div>
        <div className="service-card-location">
          <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
          <span>{location}</span>
        </div>
        <div className="service-card-services">{services}</div>
        <div className="service-card-actions">
          <button
            className="call-action-button"
            aria-label={`Call ${contactNumber}`}
            onClick={() => (window.location.href = `tel:${contactNumber}`)}
          >
            <i className="fas fa-phone" aria-hidden="true"></i>
            {contactNumber}
          </button>
          <button
            className="enquiry-button"
            aria-label={`Send enquiry for ${title}`}
          >
            Send Enquiry
          </button>
          <button
            className="whatsapp-action-button"
            aria-label={`WhatsApp ${title}`}
            onClick={() =>
              window.open(`https://wa.me/${contactNumber}`, "_blank")
            }
          >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            WhatsApp
          </button>
        </div>
        <div className="service-card-enquiries">
          <span>{enquiryCount} people recently enquired</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
