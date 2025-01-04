import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import backgroundvideo from "../assets/backgroundvideo.mp4";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isBusinessUser: false,
    businessname: "",
    phone: "",
    profilePicture: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      let dataToSend;

      if (formData.isBusinessUser) {
        // Create FormData for business user
        dataToSend = new FormData();
        for (const key in formData) {
          if (key === "profilePicture" && formData.profilePicture) {
            dataToSend.append(key, formData.profilePicture);
          } else {
            dataToSend.append(key, formData[key]);
          }
        }
      } else {
        // Create JSON object for normal user
        const { username, email, password, confirmPassword } = formData;
        dataToSend = { username, email, password, confirmPassword };
      }

      const config = formData.isBusinessUser
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : { headers: { "Content-Type": "application/json" } };

      const response = await axios.post(
        "http://localhost:8000/api/signup/",
        dataToSend,
        config
      );

      console.log("Sign-up successful:", response.data);
      navigate("/Login");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Sign-up failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-form-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Sign Up</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="Enter your username"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirm your password"
        />

        <label>
          <input
            type="checkbox"
            name="isBusinessUser"
            checked={formData.isBusinessUser}
            onChange={handleChange}
          />
          Are you a business user?
        </label>

        {formData.isBusinessUser && (
          <>
            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessname"
              value={formData.businessName}
              onChange={handleChange}
              required
              placeholder="Enter your business name"
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />

            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={handleFileChange}
              required
            />
          </>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;