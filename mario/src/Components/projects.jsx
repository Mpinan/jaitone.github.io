import React, { Component } from "react";
import img1 from "../Assets/1_MCn1VrXQznTi3JMtAIGK0g.jpeg";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
} from "reactstrap";

class Projects extends Component {
  render() {
    return (
      <Container>
        <h1>Some of my work</h1>
        <div className="row">
          <div className="col">
            <div className="img">
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <img src={img1} alt="Avatar" class="image" />
                <div style={{ marginTop: "40px" }} class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <img src={img1} alt="Avatar" class="image" />
                <div style={{ marginTop: "40px" }} class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <img src={img1} alt="Avatar" class="image" />
                <div style={{ marginTop: "40px" }} class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <div className="img">
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <img src={img1} alt="Avatar" class="image" />
                <div style={{ marginTop: "40px" }} class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <img src={img1} alt="Avatar" class="image" />
                <div style={{ marginTop: "40px" }} class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <img src={img1} alt="Avatar" class="image" />
                <div style={{ marginTop: "40px" }} class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    );
  }
}

export default Projects;
