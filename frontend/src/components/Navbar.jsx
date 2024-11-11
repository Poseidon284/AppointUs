import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from "../assets/LOGO.png";
import search_icon from "../assets/SEARCHICON.png";
import serviceslogo from "../assets/SERVICESLOGO.png";
import login_icon from "../assets/LOGINICON.png"; // Add a small login icon

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoname">
        <div className="logoimage">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="logotext">Appoint-Us</div>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#services">Services</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input2"
          />
          <img src={search_icon} alt="Search Icon" className="search-icon" />
        </div>
        <div className="navbar-services-icon">
          <img src={serviceslogo} alt="Services Icon" />
        </div>
        <Link to="/login">
          {" "}
          {/* Wrap login-related items in a Link */}
          <button className="sign-in">Sign-in</button>
          <img src={login_icon} alt="Login Icon" className="login-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
