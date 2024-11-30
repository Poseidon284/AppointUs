import React from "react";
import "./SocialCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialCards = () => {
  const socialMediaDetails = [
    { icon: faEnvelope, title: "Email", contact: "info@example.com" },
    { icon: faPhone, title: "Phone", contact: "+1 234 567 890" },

    { icon: faTwitter, title: "Twitter", contact: "@twitterhandle" },
    { icon: faInstagram, title: "Instagram", contact: "@instaprofile" },
  ];

  return (
    <div className="social-cards-container">
      {socialMediaDetails.map((item, index) => (
        <div className="social-card" key={index}>
          <FontAwesomeIcon icon={item.icon} className="social-icon" />
          <h3>{item.title}</h3>
          <p>{item.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialCards;
