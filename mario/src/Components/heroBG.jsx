import React, { Component } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Hero = (props) => {
  return (
    <div>
      <div>
        <div className="hero-text">
          <h1>Mario Garcia Pinan</h1>
          <p>Full-Stack Junior Developer</p>
          <Button link to="#resume">
            Find out more
          </Button>
          <div className="icons">
            <FontAwesomeIcon style={{ margin: "5px" }} icon={faInstagram} />
            <FontAwesomeIcon style={{ margin: "5px" }} icon={faLinkedin} />
            <FontAwesomeIcon style={{ margin: "5px" }} icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
