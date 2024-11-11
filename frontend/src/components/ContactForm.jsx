import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import contactImage from "../assets/IMAGE09.gif";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Updated axios request URL to target backend at port 8000
      const response = await axios.post(
        "http://localhost:8000/contact",
        formData
      );
      setResponseMessage("Thank you! Your query has been submitted.");
      setFormData({ name: "", email: "", query: "" });
    } catch (error) {
      setResponseMessage(
        "Sorry, there was an issue submitting your form. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactImage} alt="Contact Us" />
      </div>
      <div className="contact-form-wrapper">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />

          <label htmlFor="query">Your Query</label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            required
            placeholder="Type your query here..."
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
