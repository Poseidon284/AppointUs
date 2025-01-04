import React from "react";
import Navbar2 from "../components/Navbar2";
import SocialCards from "../components/SocialCards";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";
import cardimageseven from "../assets/IMAGE12.webp";
import Bookings from "../components/Bookings";
import SelectUser from "../components/SelectUser";
import BUD from "../components/BUD";
import "./BUDEntry.css";

const BUDEntry = () => {
  return (
    <div>
      <Navbar2 />
      <div className="budcontainer">
        <BUD />
      </div>

      <SocialCards />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default BUDEntry;
