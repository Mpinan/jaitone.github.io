import React, { Component } from "react";
import Projects from "./projects";
import About from "./about";
import Hero from "./buttons";

import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
// import About from "./about";

class Header extends Component {
  state = {
    activeItemJustified: "1",
  };

  toggleJustified = (tab) => (e) => {
    if (this.state.activeItemJustified !== tab) {
      this.setState({
        activeItemJustified: tab,
      });
    }
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBNav className="nav-justified">
            <MDBNavItem>
              <MDBNavLink
                className="text-nav"
                link
                to="#home"
                active={this.state.activeItemJustified === "1"}
                onClick={this.toggleJustified("1")}
                role="tab"
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="text-nav"
                link
                to="#projects"
                active={this.state.activeItemJustified === "2"}
                onClick={this.toggleJustified("2")}
                role="tab"
              >
                Projects
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="text-nav"
                link
                to="#resume"
                active={this.state.activeItemJustified === "3"}
                onClick={this.toggleJustified("3")}
                role="tab"
              >
                Resume
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="text-nav"
                link
                to="#contact"
                active={this.state.activeItemJustified === "4"}
                onClick={this.toggleJustified("4")}
                role="tab"
              >
                Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>
        <MDBTabContent
          className=".bg-transparent"
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId="1">
            <Hero className="mt-2" />
          </MDBTabPane>
          <MDBTabPane tabId="2">
            <Projects className="mt-2" />
          </MDBTabPane>
          <MDBTabPane tabId="3">
            <p className="mt-2">Waiting for component</p>
          </MDBTabPane>
          <MDBTabPane tabId="4">
            <p className="mt-2">Waiting for component</p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    );
  }
}

export default Header;
