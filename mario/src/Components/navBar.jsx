import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        className="navbar fixed-top navbar-dark"
        style={{
          backgroundColor: "transparent",
          position: "center",
          marginBottom: "0px"
        }}
      >
        <NavbarBrand href="/" className="mr-auto">
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/projects/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
