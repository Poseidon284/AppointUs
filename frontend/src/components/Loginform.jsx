import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import backgroundvideo from "../assets/backgroundvideo.mp4";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Updated axios request URL to target backend at port 8000
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        formData
      );
      console.log("Login successful:", response.data);
      // Handle successful login here, e.g., redirect to dashboard or save auth token
      navigate("/Home");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your Username"
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

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {/* Sign-up link for new users */}
        <p className="signup-link">
          Not a member? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
