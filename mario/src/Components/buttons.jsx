import React, { Component } from "react";
import { Button } from "reactstrap";

const ButtonsHeader = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome!</h2>
      <h5>
        In early 2019 I made the decision to hang up my apron and change my life
        by learning how to code.
        <br />
        At the time, I did not even know about the existence of ‘GitHub’ or
        "programming languages".
        <br />
        <br />
        Few months later, here I am, a full stack junior developer.
      </h5>
      <Button
        href="/about"
        style={{
          margin: 40,
          padding: 25,
          border: 25,
          backgroundColor: "#7D758A"
        }}
        className="rounded-0"
      >
        About me
      </Button>
      <Button
        href="/projects"
        style={{
          margin: 40,
          padding: 25,
          border: 25,
          backgroundColor: "#7D758A"
        }}
        className="rounded-0"
      >
        Projects
      </Button>
    </div>
  );
};

export default ButtonsHeader;
