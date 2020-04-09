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

class Projects extends Component {
  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Row>
            <Col style={{ margin: "10px" }}>
              <Card
                body
                inverse
                style={{ backgroundColor: "#9098BC", borderColor: "#333" }}
              >
                <CardTitle>
                  <h4>Acebook</h4>
                </CardTitle>
                <CardText>
                  A humble copy of facebook with posts, albums...
                  <br />
                  <br />
                  <b>Tech stack:</b> Ruby on rails, RSpec, Capybara, PostgreSQL,
                  Active Record, Bootstrap, RuboCop, Simplecov
                </CardText>
                <Button>Link to Github</Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: "10px" }}>
              <Card
                body
                inverse
                style={{ backgroundColor: "#9098BC", borderColor: "#333" }}
              >
                <CardTitle>
                  <h4>The Cat Api</h4>
                </CardTitle>
                <CardText>
                  A Web Page that renders information about Purrrfect cats from
                  TheCatApi,
                  <br />
                  <br />
                  <b>Tech stack:</b> React and Reactstrap
                </CardText>
                <Button>Link to Github</Button>
              </Card>
            </Col>
            <Col style={{ margin: "10px" }}>
              <Card
                body
                inverse
                style={{ backgroundColor: "#9098BC", borderColor: "#333" }}
              >
                <CardTitle>
                  <h4>Hoover</h4>
                </CardTitle>
                <CardText>
                  Program that navigates an imaginary robotic hoover (much like
                  a Roomba)
                  <br />
                  <br />
                  <b>Tech stack:</b> Javascript and Jest
                </CardText>
                <Button>Link to Github</Button>
              </Card>
            </Col>
            <Col style={{ margin: "10px" }}>
              <Card
                body
                inverse
                style={{ backgroundColor: "#9098BC", borderColor: "#333" }}
              >
                <CardTitle>
                  <h4>The Chitter FE</h4>
                </CardTitle>
                <CardText>
                  A very humble Front-end copy of twitter with a given back end
                  in Ruby on rails
                  <br />
                  <br />
                  <b>Tech stack:</b> React and reactstrap
                </CardText>
                <Button>Link to Github</Button>
              </Card>
            </Col>
            <Col style={{ margin: "10px" }}>
              <Card
                body
                inverse
                style={{ backgroundColor: "#9098BC", borderColor: "#333" }}
              >
                <CardTitle>
                  <h4>Thermostat</h4>
                </CardTitle>
                <CardText>
                  A thermostat app where you can increase or descreas the
                  temperature with a weather API.
                  <br />
                  <br />
                  <b>Tech stack:</b> Javascript, Jasmine and jQuery
                </CardText>
                <Button>Link to Github</Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card
                body
                inverse
                style={{ backgroundColor: "#9098BC", borderColor: "#333" }}
              >
                <CardTitle>
                  <h4>BorisBikes-TheGame</h4>
                </CardTitle>
                <CardText>
                  A game in honor to the first project at makers where we build
                  a game engine in JavaScript
                  <br />
                  <br />
                  <b>Tech stack:</b> React and reactstrap
                </CardText>
                <Button>Link to Github</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Projects;
