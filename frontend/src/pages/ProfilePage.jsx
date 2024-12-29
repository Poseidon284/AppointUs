import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Hero6 from "../components/Hero6";
import PLUMBERLOGO from "../assets/faizan.avif";
import Footer from "../components/Footer";
import Description from "../components/Description";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState({});
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user/details/");
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUserDetails(data || {}); // Added default fallback
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Fetch user orders
    const fetchUserOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user/orders/");
        if (!response.ok) {
          throw new Error("Failed to fetch user orders");
        }
        const data = await response.json();
        setUserOrders(data.orders || []); // Added default fallback
      } catch (error) {
        console.error("Error fetching user orders:", error);
      }
    };

    fetchUserDetails();
    fetchUserOrders();
  }, []);

  return (
    <div className="section1">
      <Navbar2 />
      <Hero6
        logo={PLUMBERLOGO}
        details={[
          `Name: ${userDetails.name || "Loading..."}`,
          `Email: ${userDetails.email || "Loading..."}`,
          `Contact: ${userDetails.contact || "Loading..."}`,
        ]}
        orders={userOrders.length > 0 ? userOrders : ["No orders found."]} // Added fallback
      />
      <Description />

      <Footer />
    </div>
  );
};

export default ProfilePage;
