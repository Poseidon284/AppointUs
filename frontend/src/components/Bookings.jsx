import React, { useState } from "react";
import axios from "axios";
import "./Bookings.css";
import FORMIMAGE from "../assets/IMAGE20.jpg";

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    query: "",
    time: "",
    email: "",
    image: null, // Add image field to store the selected file
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const formDataToSend = new FormData();
    // Append text fields
    for (const key in formData) {
      if (key !== "image") {
        formDataToSend.append(key, formData[key]);
      }
    }
    // Append the image
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      // Send form data to backend running on localhost:8000
      const response = await axios.post(
        "http://127.0.0.1:8000/api/bookings/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for image upload
          },
        }
      );
      setResponseMessage("Thank you! Your booking has been submitted.");
      setFormData({
        name: "",
        location: "",
        phone: "",
        query: "",
        time: "",
        email: "",
        image: null, // Reset the image field after submission
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
          Exact Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
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
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time slot</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </label>

        <label>
          Email Address (Optional):
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Upload Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Bookings;
