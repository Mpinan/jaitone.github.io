import React, { useState } from "react";
import Header from "./header";
import Carousel from "./carousel";
import PopUpModal from "./modals";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        className="navbar fixed-top navbar-light bg-light"
        color="faded"
        light
      >
        <NavbarBrand href="/" className="mr-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Header />
      <PopUpModal />
      {/* <Carousel /> */}
    </div>
  );
};

export default NavBar;
