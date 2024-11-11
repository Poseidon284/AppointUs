import React from "react";
import Navbar2 from "../components/Navbar2";
import Searchsection from "../components/Searchsection";
import "./Home.css";

import cardimageone from "../assets/IMAGE02.jpg";
import cardimagetwo from "../assets/IMAGE04.jpg";
import cardimagethree from "../assets/IMAGE05.jpg";
import cardimagegif from "../assets/IMAGE08.gif";
import cardimagesix from "../assets/IMAGE11.jpg";
import cardimagefour from "../assets/IMAGE12.jpg";
import cardimagefive from "../assets/IMAGE13.jpg";
import cardimageseven from "../assets/IMAGE12.webp";

import "./LandingPage.css";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/Contactform";
import Card2 from "../components/Card2";
import ResultCard from "../components/ResultCard";

const Home = () => {
  return (
    <div>
      <Navbar2 />
      <div className="searchsection">
        <Searchsection />
      </div>

      <div className="cardsection2">
        <Card2
          image={cardimageone}
          title="Carpentry Services"
          description="Expert carpentry services for your home or office."
          link="/carpentry" // Endpoint for carpentry services
        />

        <Card2
          image={cardimagetwo}
          title="Plumbing Services"
          description="Professional plumbing services to fix all your water-related issues."
          link="/plumbing" // Endpoint for plumbing services
        />

        <Card2
          image={cardimagethree}
          title="Painter Services"
          description="High-quality painting services to give your space a fresh look."
          link="/painting" // Endpoint for painting services
        />

        <Card2
          image={cardimagefour}
          title="Electrician Services"
          description="Skilled electricians for all your electrical needs, from repairs to installations."
          link="/electrician" // Endpoint for electrician services
        />

        <Card2
          image={cardimagefive}
          title="Masonry Services"
          description="Top-notch masonry services, including bricklaying, stonework, and more."
          link="/masonry" // Endpoint for masonry services
        />

        <Card2
          image={cardimagesix}
          title="Salon Services"
          description="Pamper yourself with our professional beauty and salon services."
          link="/salon" // Endpoint for salon services
        />
      </div>
      <br />
      <br />
      <br />
      <Hero2
        title="About-Us"
        subtitle="Connecting Services with Success"
        content="Appointus is dedicated to empowering small and micro-scale businesses by connecting them with potential customers. Our platform bridges communication gaps with real-time translation, provides analytics to help businesses grow, and offers tailored recommendations to ensure consumers find the best services to meet their needs."
        image={cardimagegif}
      />

      <ContactForm />
      <Hero2
        title="Build your Business- Appointus"
        subtitle="The best place to attract customers"
        content="Appointus is dedicated to empowering small and micro-scale businesses by connecting them with potential customers. Our platform bridges communication gaps with real-time translation, provides analytics to help businesses grow, and offers tailored recommendations to ensure consumers find the best services to meet their needs."
        image={cardimageseven}
      />

      <Footer />
    </div>
  );
};

export default Home;
