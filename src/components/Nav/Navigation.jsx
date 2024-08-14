import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
 import logo from './Logo.png'
const Navigation = () => {
  return (
    <div>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{width:"50px",height:"30px"}}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
