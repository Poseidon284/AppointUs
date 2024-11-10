import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        username,
        password,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.message || error);
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-field">
          <label className="login-form-label">Username</label>
          <input
            type="text"
            className="login-form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-form-field">
          <label className="login-form-label">Password</label>
          <input
            type="password"
            className="login-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-form-button">
          Login
        </button>
      </form>
      <div className="signup-redirect">
        <p>
          Not a user?{" "}
          <Link to="/Signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
