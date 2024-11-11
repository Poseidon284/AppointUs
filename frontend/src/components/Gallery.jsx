import React, { useEffect, useState } from "react";
import "./Gallery.css";

// Import images from assets folder
import PLUMBERONE from "../assets/PLUMBERONE.webp";
import PLUMBERTWO from "../assets/PLUMBERTWO.avif";
import PLUMBERTHREE from "../assets/PLUMBERTHREE.jpg";
import PLUMBERFOUR from "../assets/PLUMBERFOUR.jpg";
import PLUMBERFIVE from "../assets/PLUMBERFIVE.jpg";
import PLUMBERSIX from "../assets/PLUMBERSIX.webp";

const images = [PLUMBERONE, PLUMBERTWO, PLUMBERTHREE, PLUMBERFOUR];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={img}
            alt={`Plumber ${index + 1}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
