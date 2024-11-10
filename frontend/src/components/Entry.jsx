import React from "react";
import carperterVideo from "./Assets/Carpenter.mp4";
import constructionVideo from "./Assets/construction.mp4";
import cleaningVideo from "./Assets/Cleaning.mp4";
import plumbingVideo from "./Assets/Tailor.mp4";
import "./Entry.css";
import LoginForm from "./Loginform";
import { Button } from "./button";

const Entry = () => {
  return (
    <div className="main">
      <div className="video-grid">
        <video className="video-bg" src={carperterVideo} autoPlay loop muted />
        <video
          className="video-bg"
          src={constructionVideo}
          autoPlay
          loop
          muted
        />
        <video className="video-bg" src={cleaningVideo} autoPlay loop muted />
        <video className="video-bg" src={plumbingVideo} autoPlay loop muted />
      </div>
      <div className="overlay">
        <LoginForm />
      </div>
    </div>
  );
};

export default Entry;
