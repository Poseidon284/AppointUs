import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar2.css";
import logo from "../assets/LOGO.png";
import serviceslogo from "../assets/SERVICESLOGO.png";
import login_icon from "../assets/LOGINICON.png";

const Navbar2 = () => {
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
          <Link to="/">Home</Link> {/* Link to the Home page */}
        </li>
        <li>
          <Link to="/services">Services</Link> {/* Link to the Menu page */}
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>{" "}
          {/* Link to the Contact Us page */}
        </li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-services-icon">
          <Link to="/services">
            <img src={serviceslogo} alt="Services Icon" />
          </Link>
        </div>
        <Link to="/bookings">
          <button className="sign-in">Bookings</button>{" "}
          {/* Link to the Bookings page */}
        </Link>
        <Link to="/login">
          <img src={login_icon} alt="Login Icon" className="login-icon" />{" "}
          {/* Link to the Login page */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
