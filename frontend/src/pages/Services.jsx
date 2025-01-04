import React from "react";
import Navbar2 from "../components/Navbar2";
import Searchsection from "../components/Searchsection";
import "./Home.css";

import cardimageone from "../assets/IMAGE02.jpg";
import cardimagetwo from "../assets/IMAGE04.jpg";
import cardimagethree from "../assets/IMAGE05.jpg";
import cardimagegif from "../assets/IMAGE08.gif";
import cardimagesix from "../assets/IMAGE11.jpg";

import cardimagefive from "../assets/IMAGE13.jpg";
import cardimageseven from "../assets/IMAGE12.webp";
import cardimageeight from "../assets/IMAGE07.avif";

import cardimagefour from "../assets/IMAGE06.jpg";

import "./LandingPage.css";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/Contactform";
import Card2 from "../components/Card2";
import ResultCard from "../components/ResultCard";
import SelectUser from "../components/SelectUser";
import BUD from "../components/BUD";
import BigHero from "../components/BigHero";

const Home = () => {
  return (
    <div>
      <Navbar2 />
      <div>
        <BigHero
          title="Services"
          subtitle="Appoint-Us provides a wide range of services lets see about that in this Section"
        />
      </div>
      <div className="cardsection2">
        <Card2
          image={cardimagetwo}
          title="Carpentry Services"
          description="Expert carpentry services for your home or office."
          link="/carpentry" // Endpoint for carpentry services
        />

        <Card2
          image={cardimagethree}
          title="Plumbing Services"
          description="Professional plumbing services to fix all your water-related issues."
          link="/plumbers" // Endpoint for plumbing services
        />

        <Card2
          image={cardimagefour}
          title="Painter Services"
          description="High-quality painting services to give your space a fresh look."
          link="/painting" // Endpoint for painting services
        />

        <Card2
          image={cardimageeight}
          title="Salon Services"
          description="Skilled Barbers for all your Styling needs."
          link="/electrician" // Endpoint for electrician services
        />

        <Card2
          image={cardimagefive}
          title="Gardeners"
          description="Top-notch Gardening services, including Homefarm, stonework, and more."
          link="/masonry" // Endpoint for masonry services
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
