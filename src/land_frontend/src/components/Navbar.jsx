// Header.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="Elza Coffee"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav" className="collapse-navbar">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
          <Nav.Link href="#whitepaper">Whitepaper</Nav.Link>
          <Nav.Link href="#wallet">Wallet</Nav.Link>          
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button variant="primary" className="wallet-btn">Wallet</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;