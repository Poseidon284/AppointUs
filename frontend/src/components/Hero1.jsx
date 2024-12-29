import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Hero1.css";
import HEROIMAGE from "../assets/IMAGE01.jpg";

const Hero1 = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStartedClick = () => {
    navigate("/login"); // Navigate to /login when button is clicked
  };

  return (
    <div className="hero-container1">
      <div className="image-section1">
        <img src={HEROIMAGE} alt="Hero" />
      </div>
      <div className="text-section1">
        <h2>Your Go-To Experts </h2>
        <h2>for Every Job!</h2>
        <p>
          AppointUs is your reliable partner for on-demand services, connecting
        </p>
        <p>
          you with skilled professionals for all your home and business needs.
        </p>
        {/* Welcome tagline */}
        <button className="get-started-btn" onClick={handleGetStartedClick}>
          Get Started
        </button>
        <button className="get-started-btn">Service-Provider</button>
        {/* Get Started button */}
      </div>
    </div>
  );
};

export default Hero1;