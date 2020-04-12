import React, { Component } from "react";
import img1 from "../Assets/img.png";
import img2 from "../Assets/weatherapp.jpg";
import img3 from "../Assets/Acebookapp.png";
import img4 from "../Assets/me.jpg";
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
      <Container style={{ textAlign: "center" }}>
        <div className="img">
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <img src={img2} alt="Avatar" class="image" />
            <div style={{ marginTop: "40px" }} class="overlay">
              <div class="text">Hello World</div>
            </div>
          </div>
        </div>
        <div className="img">
          <div style={{ marginTop: "40px" }}>
            <img src={img1} alt="Avatar" class="image" />
            <div
              style={{ marginTop: "40px", marginBottom: "40px" }}
              class="overlay"
            >
              <div class="text">World</div>
            </div>
          </div>
        </div>
        <div className="img">
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <img src={img3} alt="Avatar" class="image" />
            <div style={{ marginTop: "40px" }} class="overlay">
              <div class="text">World</div>
            </div>
          </div>
        </div>
        <div className="img">
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <img src={img4} alt="Avatar" class="image" />
            <div style={{ marginTop: "40px" }} class="overlay">
              <div class="text">World</div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Projects;
