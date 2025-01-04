import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero7 from "../components/Hero7";
import SocialCards from "../components/SocialCards";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";
import BigHero from "../components/BigHero";

const Aboutus = () => {
  return (
    <div>
      <Navbar2 />
      <div>
        <BigHero title="ABOUT-US" subtitle="A brief Overview" />
      </div>
      <Hero7 />
      <SocialCards />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Aboutus;
