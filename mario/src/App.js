import React from "react";
// import { Container } from "reactstrap";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./Components/navBar";
import About from "./Components/about";
import Header from "./Components/header";
const img = "./Assets/unnamed.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url:${img}` }}>
      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Header} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Redirect exact path="/" exact to="/home" />
        </Switch>
      </BrowserRouter>
      {/* <Header /> */}
    </div>
  );
}

export default App;
