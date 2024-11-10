import React from "react";

import Entryinitial from "../Entryinitial";
import Cardcontainer from "../Cardcontainer";
import Herosection from "../Herosection";
import HeroSection2 from "../HeroSection2";
import Footer from "../Footer";
import Results from "../Results";
import Heroimg from "../Heroimg";
import "./Entrypage.css";
import imageone from "../Assets/imageone.jpg";
import imagetwo from "../Assets/imagetwo.jpg";
import imagethree from "../Assets/imagethree.jpg";
import imagefour from "../Assets/imagefour.jpg";
import imagefive from "../Assets/imagefive.jpg";
import imagesix from "../Assets/imagesix.jpg";
import imageseven from "../Assets/imageseven.jpg";
import imageeight from "../Assets/imageeight.jpg";

function Entrypage() {
  return (
    <>
      <div className="section1">
        <Heroimg />
      </div>

      <div className="section3">
        <Results imageUrl={imageone} title="Service 1" />
        <Results imageUrl={imagetwo} title="Service 2" />
        <Results imageUrl={imagethree} title="Service 3" />
        <Results imageUrl={imagefour} title="Service 4" />
        <Results imageUrl={imagefive} title="Service 5" />
        <Results imageUrl={imagesix} title="Service 6" />
        <Results imageUrl={imageseven} title="Service 7" />
        <Results imageUrl={imageeight} title="Service 8" />
      </div>

      <div className="section4">
        <Herosection
          title="Welcome to Appointus - Your Ultimate Service Marketplace"
          subtitle="At Appointus, we pride ourselves on connecting you with a wide range of services, available at your fingertips, anytime and anywhere. Our platform is designed to be your go-to resource for discovering and booking services that fit your lifestyle and needs."
          buttonLabel="About Us"
          style="Background-color:white;"
        />
        <div className="section2">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Entrypage;
