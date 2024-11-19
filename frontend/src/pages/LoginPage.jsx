import React from "react";
import Hero1 from "../components/Hero1";
import cardimageone from "../assets/IMAGE02.jpg";
import cardimagetwo from "../assets/IMAGE04.jpg";
import cardimagethree from "../assets/IMAGE05.jpg";
import cardimagegif from "../assets/IMAGE08.gif";

import Card from "../components/Card";
import "./LandingPage.css";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import ContactForm from "../components/Contactform";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      {/* <div className="cardsection">
        <Card
          image={cardimageone}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimagetwo}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimagethree}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />

        <Card
          image={cardimageone}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimagethree}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimageone}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimagetwo}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimagethree}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />

        <Card
          image={cardimageone}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
        <Card
          image={cardimagethree}
          title="Professional Card Title"
          description="This is a brief description of the card content."
          buttonText="Learn More"
          buttonLink="#"
        />
      </div> */}
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

export default LoginPage;
