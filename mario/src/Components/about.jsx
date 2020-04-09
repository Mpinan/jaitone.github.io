import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText
} from "reactstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <Container style={{ marginTop: "250px" }}>
        <div style={{ marginBottom: "50px" }}>
          <div>
            <span
              style={{
                height: "180px",
                float: "left",
                width: "45%"
              }}
            >
              <h2>Who I am</h2>
              For years I have had a strong interest in technology, its
              components and the way in which different parts work together.
              This has spurred an interest in coding, as I sought to understand
              the work behind the scenes, how to find the source of a problem
              and fix it in a methodical way. As a Makers graduate, I am seeking
              an opportunity to begin an exciting career while furthering my
              knowledge of computer programming.
            </span>
          </div>
          <div>
            <span
              style={{
                height: "180px",
                float: "right",
                width: "45%"
              }}
            >
              <h2>Why should I work for you?</h2>
              For years I have had a strong interest in technology, its
              components and the way in which different parts work together.
              This has spurred an interest in coding, as I sought to understand
              the work behind the scenes, how to find the source of a problem
              and fix it in a methodical way. As a Makers graduate, I am seeking
              an opportunity to begin an exciting career while furthering my
              knowledge of computer programming.
            </span>
          </div>
        </div>
        <div style={{ marginTop: "80px", float: "center" }}>
          <p
            style={{
              marginTop: "80px",
              float: "center",
              width: "45%"
            }}
          >
            <h2>Where do I see myself?</h2>
            For years I have had a strong interest in technology, its components
            and the way in which different parts work together. This has spurred
            an interest in coding, as I sought to understand the work behind the
            scenes, how to find the source of a problem and fix it in a
            methodical way. As a Makers graduate, I am seeking an opportunity to
            begin an exciting career while furthering my knowledge of computer
            programming.
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
