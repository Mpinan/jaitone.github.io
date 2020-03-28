import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Layer = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Mario Garcia Pinan</h1>
        <p className="lead">Junior Full Stack Developer.</p>
        <hr className="my-2" />
        <p>Made in Makers Academy</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Layer;
