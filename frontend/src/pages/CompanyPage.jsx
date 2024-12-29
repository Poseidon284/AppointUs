import React from "react";
import { useLocation } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import Hero4 from "../components/Hero4";
import Gallery from "../components/Gallery";
import Hero5 from "../components/Hero5";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import ContactForm from "../components/Contactform";
import Bookings from "../components/Bookings";
import Review from "../components/Review";
import "./CompanyPage.css";

const CompanyPage = () => {
  const location = useLocation();
  const {
    companyName = "Unknown Company",
    address = "Address not available",
    ratings = "No ratings yet",
    description = "No description available",
    image,
  } = location.state || {}; // Default values if no state is passed

  return (
    <div>
      <Navbar2 />
      <Hero4
        companyName={companyName}
        address={address}
        ratings={ratings}
        description={description}
        backgroundImage={image || "defaultImagePath"}
      />
      <Gallery />
      <Review />
      <Hero5
        title={`About ${companyName}`}
        description={description}
        services={[
          "Emergency Plumbing Services",
          "Pipe Installation & Repair",
          "Water Heater Installation & Maintenance",
        ]}
        experienceDescription="Providing reliable, cost-effective plumbing solutions for years."
        latitude={34.0522}
        longitude={-118.2437}
        socialLinks={[
          { url: "https://www.facebook.com", icon: "fab fa-facebook-f" },
          { url: "https://www.twitter.com", icon: "fab fa-twitter" },
        ]}
      />
      <Bookings />
      <Hero2
        title="Build your Business - Appointus"
        subtitle="The best place to attract customers"
        content="Empowering small and micro-scale businesses by connecting them with potential customers."
        image={image || "defaultImagePath"}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CompanyPage;
