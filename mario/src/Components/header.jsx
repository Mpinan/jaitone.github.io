import React from "react";
import { Jumbotron, Button } from "reactstrap";
import bgimage from "../Assets/header-computer-close3-1920x500.jpg";

const Header = props => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover"
        }}
      >
        <h1 className="display-3 text-white" style={{ marginBottom: 100 }}>
          Mario Garcia Pinan
        </h1>
        <p className="lead text-white">Junior Full Stack Developer.</p>
        <hr className="my-2 " />
        {/* <p className="text-white">mgpinan1990@gmail.com</p> */}
        <p className="lead">
          <Button color="secondary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
