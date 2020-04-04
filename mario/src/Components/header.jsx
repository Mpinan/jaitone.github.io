import React from "react";
import { Jumbotron, Button } from "reactstrap";
import bgimage from "../Assets/header-computer-close3-1920x500.jpg";

const Header = props => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <h1 className="display-3 text-white" style={{ margin: 100 }}>
          Mario Garcia Pinan
        </h1>
        <div style={{ margin: 100 }}>
          <p className="lead text-white">Junior Full Stack Developer.</p>
          <hr className="my-2 " />
          {/* <p className="text-white">mgpinan1990@gmail.com</p> */}
          <p className="lead">
            <Button color="secondary" className="rounded-0">
              Learn More
            </Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;
