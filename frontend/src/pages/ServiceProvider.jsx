import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero6 from "../components/Hero6";
import PLUMBERLOGO from "../assets/IMAGETWO.png";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";
import Description from "./Description";

const ServiceProvider = () => {
  const details = [
    "Owner: R. Venkatesh",
    "Address: 12A, Anna Salai, Chennai, Tamil Nadu - 600002",
    "Contact: +91-98765-43210",
  ];
  const orders = [
    "Order #101: 3 items - ₹1,200",
    "Order #102: 1 item - ₹350",
    "Order #103: 5 items - ₹2,750",
  ];

  return (
    <div className="section1">
      <Navbar2 />
      <Hero6 logo={PLUMBERLOGO} details={details} orders={orders} />
      <Description />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServiceProvider;
