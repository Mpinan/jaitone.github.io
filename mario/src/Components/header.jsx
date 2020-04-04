import React from "react";
import { Jumbotron, Button } from "reactstrap";
import bgimage from "../Assets/header-computer-close3-1920x500.jpg";
import PopUpModal from "./modals";
// import About from "./about";

const Header = props => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          height: "100%"
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
          <p className="lead">
            <Button href="/about" color="secondary" className="rounded-0">
              About me
            </Button>
          </p>
        </div>
      </Jumbotron>
      <PopUpModal />
    </div>
  );
};

export default Header;
