import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";
import Plumbers from "./pages/Plumbers";
import CompanyPage from "./pages/CompanyPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
          <Route path="/Login" element={<LoginPage />} />{" "}
          <Route path="/Signup" element={<SignupPage />} />{" "}
          <Route path="/Home" element={<Home />} />{" "}
          <Route path="/plumbing" element={<Plumbers />} />{" "}
          <Route path="/company" element={<CompanyPage />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
