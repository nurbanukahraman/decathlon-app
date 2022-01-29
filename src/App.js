import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import Home from "./components/Home";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Router>
      <>
        <Navbar bg="light" >
          <Container>
            <NavLink activeClassName="active" className="nav-link" exact to="/">
              <Navbar.Brand to="7">DUMMYAPI.IO</Navbar.Brand>
            </NavLink>
            <Nav className="me-auto">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/users"
              >
                USERS
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={UserDetail} />
          </Switch>
        </header>
      </>
    </Router>
  );
}

export default App;
