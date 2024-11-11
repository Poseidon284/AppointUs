import React from "react";
import "./Hero4.css"; // Import the CSS file

const Hero4 = ({ companyName, address, contact, ratings }) => {
  return (
    <section className="hero-section4">
      <div className="container4">
        <h1 className="company-name4">{companyName}</h1>
        <div className="company-details4">
          <p className="address4">
            <strong>Address:</strong> {address}
          </p>
          <p className="contact4">
            <strong>Contact:</strong> {contact}
          </p>
          <p className="ratings4">
            <strong>Ratings:</strong> {ratings} / 5
          </p>
        </div>
        <div className="social-icons4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link4"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link4"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link4"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link4"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <button id="hero4-contact-btn">BOOK NOW</button>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="hero4-contact-btn2">WHATSAPP</button>
        </a>
      </div>
    </section>
  );
};

export default Hero4;
