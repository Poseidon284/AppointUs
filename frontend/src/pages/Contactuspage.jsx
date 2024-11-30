import React from "react";
import Navbar2 from "../components/Navbar2";
import SocialCards from "../components/SocialCards";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";
import cardimageseven from "../assets/IMAGE12.webp";
import Bookings from "../components/Bookings";

const Contactuspage = () => {
  return (
    <div>
      <Navbar2 />
      <Hero2
        title="Build your Business- Appointus"
        subtitle="The best place to attract customers"
        content="Appointus is dedicated to empowering small and micro-scale businesses by connecting them with potential customers. Our platform bridges communication gaps with real-time translation, provides analytics to help businesses grow, and offers tailored recommendations to ensure consumers find the best services to meet their needs."
        image={cardimageseven}
      />
      <SocialCards />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contactuspage;
