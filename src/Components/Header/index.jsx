import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'; // Import search icon

const FitMakerHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div className="bg-danger" style={{ width: "30px", height: "30px", marginRight: "10px" }}></div>
          <div>
            <div className="fw-bold m-0">FitMaker</div>
            <div className="text-white-50" style={{ fontSize: "0.7rem" }}>Transform Your Body</div>
          </div>
        </Navbar.Brand>
        
        {/* Search icon */}
        <div className="d-flex align-items-center ms-4 d-none d-lg-flex">
          <Search size={20} color="white" />
        </div>
        
        <div className="d-flex order-lg-last">
          <Button variant="outline-danger" className="me-2">Login</Button>
          <Button variant="danger">Sign Up</Button>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-white border-bottom border-danger mx-5">Home</Nav.Link>
            <Nav.Link href="#programs" className="text-white-50 mx-5">Programs</Nav.Link>
            <Nav.Link href="#coaching" className="text-white-50 mx-5">Coaching</Nav.Link>
            <Nav.Link href="#membership" className="text-white-50 mx-5">Membership</Nav.Link>
            <Nav.Link href="#about" className="text-white-50 mx-5">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FitMakerHeader;