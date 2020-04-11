import React, { Component } from "react";
// import { Container } from "reactstrap";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./Components/navBar";
import About from "./Components/about";
import Header from "./Components/header";
import Projects from "./Components/projects";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
