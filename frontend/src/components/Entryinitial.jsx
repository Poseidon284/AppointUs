import React from "react";
import carperterVideo from "./Assets/Carpenter.mp4";
import constructionVideo from "./Assets/construction.mp4";
import cleaningVideo from "./Assets/Cleaning.mp4";
import plumbingVideo from "./Assets/Tailor.mp4";
import "./Entryinitial.css";
import LoginForm from "./Loginform";

import { Button } from "./button";
import { Link } from "react-router-dom";

const Entryinitial = () => {
  return (
    <div className="main1">
      <div className="video-grid1">
        <video className="video-bg1" src={carperterVideo} autoPlay loop muted />
        <video
          className="video-bg1"
          src={constructionVideo}
          autoPlay
          loop
          muted
        />
        <video className="video-bg1" src={cleaningVideo} autoPlay loop muted />
        <video className="video-bg1" src={plumbingVideo} autoPlay loop muted />
      </div>
      <div className="video-grid12">
        <video
          className="video-bg12"
          src={carperterVideo}
          autoPlay
          loop
          muted
        />
        <video
          className="video-bg12"
          src={constructionVideo}
          autoPlay
          loop
          muted
        />
        <video className="video-bg12" src={cleaningVideo} autoPlay loop muted />
        <video className="video-bg12" src={plumbingVideo} autoPlay loop muted />
      </div>
      <div className="overlay">
        <div class="wrapper">
          <div class="typing-demo">
            Find It, Book It, Done – Services Made Simple.
          </div>
        </div>
      </div>
      <div className="getstartedbutton">
        <Link to="/Login">
          <Button
            to="/Login"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          >
            GET-STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Entryinitial;
