import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/styles.css';


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
          <Nav.Link as={Link} to={""} className="text-white border-bottom border-danger mx-5">Home</Nav.Link>

          <NavDropdown title="Programs" id="programs-dropdown" className="mx-5 programs-dropdown">
            <NavDropdown.Item as={Link} to={"/weight-loss"}>Weight Loss</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/building-muscles"}>Building Muscles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/home-workout"}>Home Workout</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/gym-plan"}>Gym Plan</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/our-plans">Our Plans</NavDropdown.Item>
            <NavDropdown.Item href="">Fitness Group</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Coaching" id="programs-dropdown" className="mx-5 programs-dropdown">
            <NavDropdown.Item href="#program1">1-on-1 Coaching</NavDropdown.Item>
            <NavDropdown.Item href="#program2">Group Coaching</NavDropdown.Item>
            <NavDropdown.Item href="#program3">Online Coaching</NavDropdown.Item>
            <NavDropdown.Item href="#program4">Nutrition Coaching</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item as={Link} to="/trainers">Meet Our Coaches</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#membership" className="text-white-50 mx-5">Membership</Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="text-white-50 mx-5">About Us</Nav.Link>
        </Nav>
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default FitMakerHeader;