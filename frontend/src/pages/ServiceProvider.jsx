import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Hero6 from "../components/Hero6";
import PLUMBERLOGO from "../assets/IMAGETWO.png";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";
import Description from "./Description";

const ServiceProvider = () => {
  const [orders, setOrders] = useState([]);
  const details = [
    "Owner: R. Venkatesh",
    "Address: 12A, Anna Salai, Chennai, Tamil Nadu - 600002",
    "Contact: +91-98765-43210",
  ];

  useEffect(() => {
    // Fetch order details from Django backend
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/bookings/");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        
        // Ensure the response contains the expected structure
        if (data && data.orders) {
          setOrders(data.orders);
        } else {
          console.warn("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

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
