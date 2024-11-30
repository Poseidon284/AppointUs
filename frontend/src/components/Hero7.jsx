import React from "react";
import "./Hero7.css";

// Import images
import cardimageone from "../assets/IMAGE02.jpg";
import cardimagetwo from "../assets/IMAGE04.jpg";
import cardimagethree from "../assets/IMAGE05.jpg";
import cardimagegif from "../assets/IMAGE08.gif";
import cardimagesix from "../assets/IMAGE11.jpg";
import cardimagefour from "../assets/IMAGE12.jpg";
import cardimagefive from "../assets/IMAGE13.jpg";
import cardimageseven from "../assets/IMAGE12.webp";

const Hero7 = () => {
  const content = [
    {
      heading: "Welcome to Appointus",
      text: "Appointus is an innovative and dynamic online marketplace designed to connect skilled service providers with individuals or businesses in need of professional expertise. Whether you're a freelancer offering digital marketing services, a handyman ready to tackle home improvement projects, or a healthcare professional looking to expand your client base, Appointus is the platform that allows you to showcase your skills and connect with a broad audience. With user-friendly interfaces, personalized recommendations, and an efficient booking system, Appointus is here to help both service providers and customers find the perfect match effortlessly. Get started today and become part of the ever-growing Appointus community!",
      image: cardimageone,
    },
    {
      heading: "Explore a Variety of Services",
      text: "At Appointus, we believe that everyone deserves access to high-quality services, regardless of their needs. Our platform offers a wide range of categories, from health and wellness to technology consulting, creative design, home repairs, and more. Browse through numerous service offerings, read reviews, and explore detailed profiles of providers to find exactly what you're looking for. Whether you're looking for a nutritionist, a graphic designer, or a housekeeper, Appointus makes it easy to find professionals who meet your needs. No matter your location or requirements, Appointus has something for everyone, with a user-friendly search tool to simplify your experience.",
      image: cardimagetwo,
    },
    {
      heading: "Efficient Booking System",
      text: "One of the most significant features of Appointus is its seamless, built-in booking system. No more endless back-and-forth emails or phone calls to schedule appointments. Our intuitive system allows you to view availability in real-time, select your preferred service provider, and book appointments with ease. Additionally, you can select the duration of your service, set reminders for your appointments, and even choose additional options or packages that the provider offers. With Appointus, you’ll experience a smooth booking process from start to finish, ensuring that your time is valued and appointments are kept on track.",
      image: cardimagethree,
    },
    {
      heading: "Seamless Experience",
      text: "We understand how important it is to have a hassle-free experience when booking services, which is why we’ve focused on making every step of the process easy and intuitive. Appointus ensures that all interactions, from browsing services to customer support, are straightforward. Our user-centric platform is designed with simplicity in mind, allowing customers and service providers to connect effortlessly. Whether you need to manage your bookings, track your service history, or contact customer support, everything is just a few clicks away. Enjoy a smooth, seamless experience every time you use Appointus.",
      image: cardimagegif,
    },
    {
      heading: "Dedicated Service Providers",
      text: "Appointus prides itself on being home to a large network of highly skilled and vetted service providers. Each provider is thoroughly reviewed and rated by previous clients, ensuring that you only encounter trustworthy and qualified professionals. Our platform hosts experts in a variety of fields, from healthcare providers like doctors and therapists to creative specialists like graphic designers and photographers. Each service provider on Appointus is committed to delivering exceptional quality and meeting the highest standards. When you book a service through Appointus, you can rest assured that you’re getting the best in the business, every time.",
      image: cardimagesix,
    },
    {
      heading: "Growing Community",
      text: "Appointus is not just a marketplace; it’s a community. A community where both customers and service providers can grow together. As the platform continues to expand, so does the variety of services and expertise available to users. Whether you're a service provider looking to expand your client base or a customer looking for new opportunities, Appointus provides the perfect environment to connect and thrive. Our community is built on trust, transparency, and continuous growth. We are proud of the diverse talent and customers that make up the Appointus community, and we’re excited to see it grow even further.",
      image: cardimagefour,
    },
    {
      heading: "Customer Reviews & Ratings",
      text: "Customer feedback is invaluable, which is why Appointus features an open review and rating system. After every service, customers are encouraged to leave honest reviews and ratings, helping others make informed decisions. These reviews are available for everyone to see, ensuring transparency and trust between customers and service providers. Whether you’re looking for a local plumber or a digital marketing consultant, reviews from other users can give you confidence that you’re making the right choice. Our transparent review system helps the best service providers stand out, fostering a competitive yet trustworthy marketplace for all.",
      image: cardimagefive,
    },
    {
      heading: "Become a Service Provider",
      text: "Are you a professional looking to offer your services to a broader audience? Becoming a service provider on Appointus is quick, easy, and free. Simply create a profile, showcase your skills, and start connecting with customers who need your expertise. Whether you’re an experienced freelancer or just starting your professional journey, Appointus is a platform that helps you find new opportunities and grow your client base. With flexible pricing, scheduling tools, and a secure payment system, you have everything you need to run a successful business. Sign up today and start reaching new clients on Appointus.",
      image: cardimageseven,
    },
  ];

  return (
    <div className="hero7-container">
      {content.map((item, index) => (
        <div className="hero7-section" key={index}>
          <img src={item.image} alt={item.heading} className="hero7-image" />
          <div className="hero7-content">
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero7;
