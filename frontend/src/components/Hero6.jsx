import React from "react";
import "./Hero6.css";
import datanal from "../assets/IMAGE12.avif";
import flush from "../assets/flush.jpg";

const Hero6 = ({ logo, details, orders, analyticsImage }) => {
  return (
    <div className="hero6-container">
      <div className="hero6-left">
        <div className="hero6-logo">
          <img src={logo} alt="Company Logo" className="hero6-logo-image" />
        </div>

        <div className="hero6-details">
          {details.map((detail, index) => (
            <div key={index} className="hero6-detail-item">
              <span className="hero6-detail-icon">📍</span>
              <span className="hero6-detail-text">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="hero6-right">
        <h2 className="hero6-orders-heading">Orders</h2>
        <div className="hero6-orders-container">
          {orders.map((order, index) => (
            <div key={index} className="hero6-order-card">
              <span className="hero6-order-text">{order.name}</span>
              <br />
              <span className="hero6-order-text">{order.phone}</span>
              <br />
              <span className="hero6-order-text">{order.location}</span>
              <br />
            </div>
          ))}
        </div>

        <h2 className="hero6-analytics-heading">Data Analytics</h2>
        <div className="hero6-analytics-container">
          <a href='http://localhost:8501/' target="_main"><img
            src={datanal}
            alt="Analytics Image"
            className="hero6-analytics-image"
          /></a>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
