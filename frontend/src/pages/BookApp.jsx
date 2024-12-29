import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero7 from "../components/Hero7";
import SocialCards from "../components/SocialCards";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";
import Bookings from "../components/Bookings";

const BookApp = () => {
  return (
    <div>
      <Navbar2 />
      <Bookings />
      <Hero7 />
      <SocialCards />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default BookApp;
