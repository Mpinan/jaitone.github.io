import React, { Component } from "react";
import { Button } from "reactstrap";

const Hero = (props) => {
  return (
    <div>
      <div>
        <div className="hero-text">
          {/* <div className="bg-text"> */}
          <h1>Mario Garcia Pinan</h1>
          <p>Full-Stack Junior Developer</p>
          <button link to="#resume">
            Find out more
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
