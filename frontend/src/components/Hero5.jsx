import React from "react";
import "./Hero5.css"; // Import the CSS file
import Map from "./Map";

const Hero5 = ({
  title,
  description,
  services,
  experienceDescription,
  latitude,
  longitude,
  socialLinks,
}) => {
  return (
    <section className="hero5-section">
      <div className="hero5-container">
        <h1 className="hero5-title">{title}</h1>
        <p className="hero5-description">{description}</p>

        <div className="hero5-services">
          <h2 className="hero5-subtitle">Our Expertise</h2>
          <ul className="hero5-services-list">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="hero5-experience">
          <div className="sectionmap">
            <Map latitude={latitude} longitude={longitude} />
          </div>
          <h2 className="hero5-subtitle">Experience & Customer Satisfaction</h2>
          <p className="hero5-experience-description">
            {experienceDescription}
          </p>
        </div>

        <div className="hero5-social-media">
          <h2 className="hero5-subtitle">Connect with Us</h2>
          <div className="hero5-icons">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero5-icon"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
