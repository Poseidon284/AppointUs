import React from "react";
import Hero1 from "../components/Hero1";
import cardimageone from "../assets/IMAGE02.jpg";
import cardimagetwo from "../assets/IMAGE04.jpg";
import cardimagethree from "../assets/IMAGE05.jpg";
import cardimagefour from "../assets/IMAGE06.jpg";
import cardimagegif from "../assets/IMAGE08.gif";
import electrician from "../assets/IMAGEELECTRICIAN.avif";
import barber from "../assets/IMAGE07.avif";
import Card from "../components/Card";
import "./LandingPage.css";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/Contactform";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <div className="cardsection" id="services">
        <Card
          image={cardimagetwo}
          title="Carpentry Services"
          description="Get high-quality carpentry work for furniture, repairs, and custom designs."
          buttonText="Learn More"
          buttonLink="/About-Us"
        />

        <Card
          image={cardimagethree}
          title="Plumbing Services"
          description="Expert plumbing solutions for repairs, installations, and maintenance."
          buttonText="Learn More"
          buttonLink="/About-Us"
        />

        <Card
          image={cardimagefour}
          title="Painting Services"
          description="Professional painting for homes, offices, and more."
          buttonText="Learn More"
          buttonLink="/About-Us"
        />

        <Card
          image={electrician}
          title="Electrician Services"
          description="Certified electricians for all electrical repairs, installations, and upgrades."
          buttonText="Learn More"
          buttonLink="/About-Us"
        />

        <Card
          image={barber}
          title="Salon Services"
          description="Expert beauty and grooming services, including haircuts, styling, and more."
          buttonText="Learn More"
          buttonLink="/About-Us"
        />

        <Card
          image={cardimageone}
          title="Cleaning Services"
          description="Expert cleaning and Insecticide services."
          buttonText="Learn More"
          buttonLink="/About-Us"
        />
      </div>
      <Hero2
        title="About-Us"
        subtitle="Connecting Services with Success"
        content="Appointus is dedicated to empowering small and micro-scale businesses by connecting them with potential customers. Our platform bridges communication gaps with real-time translation, provides analytics to help businesses grow, and offers tailored recommendations to ensure consumers find the best services to meet their needs."
        image={cardimagegif}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
