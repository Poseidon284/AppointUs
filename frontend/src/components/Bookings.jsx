import React, { useState, useContext } from "react";
import axios from "axios";
import "./Bookings.css";
import FORMIMAGE from "../assets/IMAGE20.jpg";
import { LoginContext } from "../LoginContext";

const Bookings = () => {
  const { loginDetails } = useContext(LoginContext);
  console.log(loginDetails);
  const [formData, setFormData] = useState({
    name: loginDetails?.name || "", // Prefill with login details
    location: "",
    phone: loginDetails?.phone || "",
    query: "",
    time: "",
    email: loginDetails?.email || "", // Prefill email
    image: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key !== "image") {
        formDataToSend.append(key, formData[key]);
      }
    }
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/bookings/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage("Thank you! Your booking has been submitted.");
      setFormData({
        name: loginDetails?.name || "",
        location: "",
        phone: loginDetails?.phone || "",
        query: "",
        time: "",
        email: loginDetails?.email || "",
        image: null,
      });
    } catch (error) {
      setResponseMessage(
        "Sorry, there was an issue submitting your booking. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bookings-container">
      <h2>Welcome, {loginDetails?.user_id || "Guest"}!</h2>
      <div className="image-container">
        <img src={FORMIMAGE} alt="Service" className="form-image" />
      </div>
      <form className="bookings-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Query:
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Preferred Time:
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Upload an Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default Bookings;