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
          <Link to="/contactus">Contact-Us</Link>
        </li>
        <li>
          <Link to="/About-Us">About-Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
      </ul>
      <div className="navbar-right">
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
