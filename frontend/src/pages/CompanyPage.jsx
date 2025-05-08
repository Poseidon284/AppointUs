import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar2 from "../components/Navbar2";
import Hero4 from "../components/Hero4";
import Gallery from "../components/Gallery";
import Hero5 from "../components/Hero5";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import ContactForm from "../components/Contactform";
import Bookings from "../components/Bookings";
import Review from "../components/Review";
import { LoginContext } from "../LoginContext";
import "./CompanyPage.css";

const CompanyPage = () => {
  const location = useLocation();
  const { loginDetails } = useContext(LoginContext);

  const {
    companyName = "Unknown Company",
    address = "Address not available",
    ratings = "No ratings yet",
    description = "No description available",
    image,
  } = location.state || {};

  const handleChatClick = () => {
    const chatLink = `http://127.0.0.1:8001/?user=${encodeURIComponent(
      loginDetails?.username || "guest"
    )}&company=${encodeURIComponent(companyName)}`;

    const templateParams = {
      to_name: loginDetails?.username || "Guest", // Username is now to_name
      from_name: companyName,
      message: ``,
      chat_link: chatLink,
      company_name: companyName,
      password: `${loginDetails?.username || "Guest"}123`, // Password is company_name + "123"
    };

    emailjs
      .send(
        "service_s09ovjm",
        "template_2fjs2j5",
        templateParams,
        "EkVW5KxgWH3d_xiww"
      )
      .then(
        (response) => {
          alert("Chat invitation sent successfully to the service provider!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          alert("Failed to send the message. Please try again later.");
          console.error("FAILED...", err);
        }
      );
  };

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

      <div
        className="chat-button-container"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        <button className="chat-now-button" onClick={handleChatClick}>
          💬 Chat with {companyName}
        </button>
      </div>

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
