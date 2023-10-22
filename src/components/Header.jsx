import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import React from "react";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        <LinkContainer to="/">
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link >Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/post">
            <Nav.Link >Post</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/form">
            <Nav.Link >Form</Nav.Link>
            </LinkContainer>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
