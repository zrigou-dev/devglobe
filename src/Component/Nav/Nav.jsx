import React from "react";
import "./Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="nav-bar">
      <Container>
        <Navbar.Brand href="#home">DevGlobe</Navbar.Brand>
        <div className="icon-menu">
        <div className="togle"><BiMenu/></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="last-togle" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links-nav">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Works</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
