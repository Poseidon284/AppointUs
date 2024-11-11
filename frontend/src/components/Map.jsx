// Map.jsx
import React, { useEffect } from "react";
import "./Map.css";

const Map = ({ latitude, longitude }) => {
  useEffect(() => {
    const iframe = document.getElementById("google-map");
    if (latitude && longitude) {
      iframe.src = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
    }
  }, [latitude, longitude]);

  return (
    <div className="map-container">
      <div className="map-wrapper">
        <iframe
          id="google-map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
