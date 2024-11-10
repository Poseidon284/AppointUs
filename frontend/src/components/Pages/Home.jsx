import React from "react";

import Entryinitial from "../Entryinitial";
import Cardcontainer from "../Cardcontainer";
import Herosection from "../Herosection";
import HeroSection2 from "../HeroSection2";
import Footer from "../Footer";
import Results from "../Results";

function Home() {
  return (
    <>
      <div className="section1">
        <Entryinitial />
      </div>
      <div className="section2">
        <Herosection />
      </div>
      <div className="section3">
        <Cardcontainer />
      </div>
      <div className="section2">
        <HeroSection2 />
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

export default Home;
