// to use JSX, import:
import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            // TODO: replace logo with SVG
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          The Neighborhood Score
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/neighborhood">Neighborhood</NavLink>
          <NavLink href="/quiz">Quiz</NavLink>
          <NavLink href="/agent">Agent Finder</NavLink>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <NavLink href="/signIn">Sign In</NavLink>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// in react html, instead of class, use className instead
