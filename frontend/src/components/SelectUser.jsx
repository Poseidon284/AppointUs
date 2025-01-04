import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const SelectUser = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="select-user-wrapper">
      <h1 className="select-user-title">Choose Your Role</h1>
      <div className="select-user-cards">
        <div
          className="select-user-card select-user-card--user"
          onClick={() => handleNavigation("/Home")}
        >
          <FontAwesomeIcon icon={faUser} className="select-user-icon" />
          <h2 className="select-user-card-title">User</h2>
          <p className="select-user-card-description">
            Explore and book services easily.
          </p>
        </div>
        <div
          className="select-user-card select-user-card--business"
          onClick={() => handleNavigation("/business")}
        >
          <FontAwesomeIcon icon={faBriefcase} className="select-user-icon" />
          <h2 className="select-user-card-title">Business User</h2>
          <p className="select-user-card-description">
            Manage and promote your services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectUser;
