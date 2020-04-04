import React, { Component } from "react";
import { Badge } from "reactstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            margin: 50,
            padding: 25,
            border: 25
          }}
        >
          <h1>Who I am</h1>
        </div>

        <h2
          style={{
            margin: 10,
            padding: 25,
            border: 25
          }}
        >
          In early 2019 I made the decision to hang up my apron and change my
          life by learning how to code. At the time, I did not even know about
          the existence of ‘GitHub’ and five months later, here I am, a full
          stack junior developer. For years I have had a strong interest in
          technology, its components and the way in which different parts work
          together. This has spurred an interest in coding, as I sought to
          understand the work behind the scenes, how to find the source of a
          problem and fix it in a methodical way. As a Makers graduate, I am
          seeking an opportunity to begin an exciting career while furthering my
          knowledge of computer programming.
        </h2>
        <div
          style={{
            textAlign: "center",
            margin: 50,
            padding: 25,
            border: 25
          }}
        >
          <h1>Why hire me</h1>
        </div>
        <h2
          style={{
            margin: 10,
            padding: 25,
            border: 25
          }}
        >
          In early 2019 I made the decision to hang up my apron and change my
          life by learning how to code. At the time, I did not even know about
          the existence of ‘GitHub’ and five months later, here I am, a full
          stack junior developer. For years I have had a strong interest in
          technology, its components and the way in which different parts work
          together. This has spurred an interest in coding, as I sought to
          understand the work behind the scenes, how to find the source of a
          problem and fix it in a methodical way. As a Makers graduate, I am
          seeking an opportunity to begin an exciting career while furthering my
          knowledge of computer programming.
        </h2>
      </div>
    );
  }
}

export default About;
