import React from "react";
import "./Footer.css"; // Import the CSS file for the footer
import imageeleven from "./Assets/imageeleven.gif";

const Footer = () => {
  return (
    <footer className="footer-container2">
      <div className="footer-content2">
        <div className="footer-image2">
          <img
            src={imageeleven}
            alt="Appointus Logo"
            className="footer-logo2"
          />
        </div>
        <div className="footer-links2">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/Home" className="footer-link2">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="footer-link2">
                About Us
              </a>
            </li>
            <li>
              <a href="/Login" className="footer-link2">
                Login
              </a>
            </li>
            <li>
              <a href="/Signup" className="footer-link2">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact2">
          <h4>Contact Us</h4>
          <p>Email: support@appointus.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social2">
          <h4>Follow Us</h4>
          <div className="social-icons2">
            <a href="#" className="social-icon2">
              Facebook
            </a>
            <a href="#" className="social-icon2">
              Twitter
            </a>
            <a href="#" className="social-icon2">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom2">
        <p>&copy; 2024 Appointus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
