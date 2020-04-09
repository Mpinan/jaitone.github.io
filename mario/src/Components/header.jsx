import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import bgimage from "../Assets/header-computer-close3-1920x500.jpg";
import ButtonsHeader from "./buttons";
// import About from "./about";

const Header = props => {
  return (
    <div>
      <Jumbotron
        style={{
          background: "transparent",
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover"
        }}
      >
        <h1
          className="display-3 text-white"
          style={{ margin: 50, padding: 25, border: 25 }}
        >
          Mario Garcia Pinan
        </h1>
        <div style={{ margin: 50, padding: 25, border: 25 }}>
          <p className="lead text-white">Junior Full Stack Developer.</p>
          <hr className="my-2 " />
          <p className="lead"></p>
        </div>
      </Jumbotron>
      <ButtonsHeader />
    </div>
  );
};

export default Header;
