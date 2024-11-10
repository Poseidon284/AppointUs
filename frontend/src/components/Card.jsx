import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <div className="image-part">
        <img
          src="Carpenter.jpg"
          className="card-image"
          alt="Carpenter Image"
        ></img>
      </div>
      <div className="content-part">
        <p>
          Carpenter: Select from the top and most reliable carpenters in town.
        </p>
        <button className="action-button">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
