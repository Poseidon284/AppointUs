import React from "react";
import { Button } from "./button";
import imageone from "./Assets/imageone.jpg";
import imagetwo from "./Assets/imagetwo.jpg";
import imagethree from "./Assets/imagethree.jpg";
import imagefour from "./Assets/imagefour.jpg";
import imagefive from "./Assets/imagefive.jpg";
import imagesix from "./Assets/imagesix.jpg";
import imageseven from "./Assets/imageseven.jpg";
import imageeight from "./Assets/imageeight.jpg";

import imagenine from "./Assets/imagenine.jpg";
import "./Cardcontainer.css";

function CardContainer() {
  return (
    <div className="section2">
      <div className="cardcontainer">
        <div className="card">
          <div className="cardimagesection">
            <img src={imageone} alt="Service 1" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Expert Consulting Services to Empower Your Business</p>
            <Button
              to="/consulting"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Consulting
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imagetwo} alt="Service 2" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Reliable Maintenance Solutions Tailored to Your Needs</p>
            <Button
              to="/maintenance"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Maintenance
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imagethree} alt="Service 3" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Comprehensive Digital Marketing Services for Growth</p>
            <Button
              to="/marketing"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Marketing
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imagefour} alt="Service 4" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Innovative Web Development Services to Elevate Your Brand</p>
            <Button
              to="/web-development"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Web Development
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imagefive} alt="Service 5" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Efficient IT Solutions to Optimize Your Infrastructure</p>
            <Button
              to="/it-solutions"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              IT Solutions
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imagesix} alt="Service 5" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Tailoring Solutions - The Best in Town, the masters</p>
            <Button
              to="/it-solutions"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              IT Solutions
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imageseven} alt="Service 5" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Tailoring Solutions - The Best in Town, the masters</p>
            <Button
              to="/it-solutions"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              IT Solutions
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imageeight} alt="Service 5" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Tailoring Solutions - The Best in Town, the masters</p>
            <Button
              to="/it-solutions"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              IT Solutions
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="cardimagesection">
            <img src={imagenine} alt="Service 5" className="cardimage" />
          </div>
          <div className="cardcontentsection">
            <p>Tailoring Solutions - The Best in Town, the masters</p>
            <Button
              to="/it-solutions"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              IT Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
