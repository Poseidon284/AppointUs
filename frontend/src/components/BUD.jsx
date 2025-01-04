import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirection
import axios from "axios";
import "./BUD.css";
import { LoginContext } from "../LoginContext";

const BUD = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    address: "",
    whatsapp_link: "",
    yearofstart: "",
    rating: "",
    lat_long: "",
    image: "", // image is now a URL field
    descriptions: "",
    link: "",
    type: "", // Added serviceType
  });
  const { loginDetails } = useContext(LoginContext); // Get login details from context
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/business/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${loginDetails?.token}`,
          },
        }
      );
      alert("Business details submitted successfully!");
      console.log(response.data);
      navigate("/serviceprovider"); // Redirect to /serviceprovider after successful submission
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Failed to submit the business details.");
    }
  };

  return (
    <div className="bud-form-container">
      <form className="bud-form" onSubmit={handleSubmit}>
        <h2 className="bud-form-title">Business Details</h2>

        {/* Business Name */}
        <div className="bud-form-group">
          <label htmlFor="bud-name">
            <i className="fas fa-building bud-icon"></i> Business Name
          </label>
          <input
            type="text"
            id="bud-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Business Location */}
        <div className="bud-form-group">
          <label htmlFor="bud-location">
            <i className="fas fa-map-marker-alt bud-icon"></i> Location
          </label>
          <input
            type="text"
            id="bud-location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Business Phone */}
        <div className="bud-form-group">
          <label htmlFor="bud-phone">
            <i className="fas fa-phone bud-icon"></i> Phone
          </label>
          <input
            type="text"
            id="bud-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Business Address */}
        <div className="bud-form-group">
          <label htmlFor="bud-address">
            <i className="fas fa-home bud-icon"></i> Address
          </label>
          <input
            type="text"
            id="bud-address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Year of Start */}
        <div className="bud-form-group">
          <label htmlFor="bud-yearofstart">
            <i className="fas fa-calendar-alt bud-icon"></i> Year of Start
          </label>
          <input
            type="text"
            id="bud-yearofstart"
            name="yearofstart"
            value={formData.yearofstart}
            onChange={handleChange}
            required
          />
        </div>

        {/* Latitude/Longitude */}
        <div className="bud-form-group">
          <label htmlFor="bud-lat-long">
            <i className="fas fa-map-marker-alt bud-icon"></i> Lat/Long
          </label>
          <input
            type="text"
            id="bud-lat-long"
            name="lat_long"
            value={formData.lat_long}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image URL
        <div className="bud-form-group">
          <label htmlFor="bud-image">
            <i className="fas fa-image bud-icon"></i> Image URL
          </label>
          <input
            type="url"
            id="bud-image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div> */}

        {/* Business Description */}
        <div className="bud-form-group">
          <label htmlFor="bud-descriptions">
            <i className="fas fa-info-circle bud-icon"></i> Description
          </label>
          <textarea
            id="bud-descriptions"
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        {/* Service Type Dropdown */}
        <div className="bud-form-group">
          <label htmlFor="bud-service-type">
            <i className="fas fa-tools bud-icon"></i> Service Type
          </label>
          <select
            id="bud-service-type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select a service type</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Salon">Salon</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bud-submit-button">
          <i className="fas fa-paper-plane"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default BUD