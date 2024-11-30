import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";
import Plumbers from "./pages/Plumbers";
import CompanyPage from "./pages/CompanyPage";
import ServiceProvider from "./pages/ServiceProvider";
import Contactuspage from "./pages/Contactuspage";
import Aboutus from "./pages/Aboutus";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
          <Route path="/Login" element={<LoginPage />} />{" "}
          <Route path="/Signup" element={<SignupPage />} />{" "}
          <Route path="/Home" element={<Home />} />{" "}
          <Route path="/plumbers" element={<Plumbers />} />{" "}
          <Route path="/company" element={<CompanyPage />} />{" "}
          <Route path="/serviceprovider" element={<ServiceProvider />} />{" "}
          <Route path="/contactus" element={<Contactuspage />} />{" "}
          <Route path="/About-Us" element={<Aboutus />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
