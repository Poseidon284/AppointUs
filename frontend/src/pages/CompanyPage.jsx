import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero4 from "../components/Hero4";
import CompanyLogo from "../assets/IMAGE15.webp";
import Gallery from "../components/Gallery";
import Hero5 from "../components/Hero5";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import cardimageseven from "../assets/IMAGE12.webp";
import Map from "../components/Map";

import "./CompanyPage.css";
import ContactForm from "../components/Contactform";
import Bookings from "../components/Bookings";
import Review from "../components/Review";
const CompanyPage = () => {
  const services = [
    "Emergency Plumbing Services",
    "Pipe Installation & Repair",
    "Water Heater Installation & Maintenance",
    "Drain Cleaning & Unclogging",
    "Leak Detection & Repair",
    "Gas Line Services",
    "Bathroom & Kitchen Plumbing",
  ];

  const socialLinks = [
    { url: "https://www.facebook.com", icon: "fab fa-facebook-f" },
    { url: "https://www.twitter.com", icon: "fab fa-twitter" },
    { url: "https://www.linkedin.com", icon: "fab fa-linkedin-in" },
    { url: "https://www.instagram.com", icon: "fab fa-instagram" },
  ];
  return (
    <div>
      <Navbar2 />
      <Hero4
        companyName="Fix Speed"
        address="451, Avinashi Road, Opp.Tirupur Textiles, Masakalipalayam, Peelamedu, Coimbatore, Tamil Nadu 641004, India"
        contact="9482263728"
        ratings="4.0"
        backgroundImage=""
      />
      <Gallery />
      <Review />
      <Hero5
        title="About Fast Flow Plumbing"
        description="DripFix Plumbing is your reliable solution for all plumbing needs, from minor repairs to major installations. Our licensed plumbers are skilled in leak detection, drain cleaning, water heater repairs, and more. We offer 24/7 emergency services to address any urgent plumbing issues, and our work is backed by a satisfaction guarantee. DripFix Plumbing ensures a worry-free plumbing experience."
        services={services}
        experienceDescription="With thousands of satisfied customers and a 95% customer satisfaction rate, we are committed to providing reliable, cost-effective plumbing solutions. Our experts have worked on plumbing projects for homeowners, builders, and businesses across the region."
        latitude={34.0522}
        longitude={-118.2437}
        socialLinks={socialLinks}
      />
      <Bookings />
      <Hero2
        title="Build your Business- Appointus"
        subtitle="The best place to attract customers"
        content="Appointus is dedicated to empowering small and micro-scale businesses by connecting them with potential customers. Our platform bridges communication gaps with real-time translation, provides analytics to help businesses grow, and offers tailored recommendations to ensure consumers find the best services to meet their needs."
        image={cardimageseven}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CompanyPage;
