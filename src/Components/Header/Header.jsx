import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'lucide-react';
import "./Header.module.css";
function FitMakerNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar variant="dark" expand="lg" expanded={expanded} className="py-2 fitmaker-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div style={{ 
              backgroundColor: '#dc3545', 
              height: '30px', 
              width: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '2px' 
            }}>
              <span className="fw-bold" style={{ fontSize: '0.9rem' }}>FIT</span>
            </div>
            <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Maker</span>
          </div>
          <span className="d-none d-md-inline text-muted ms-2" style={{ fontSize: '0.75rem' }}>Transform Your Body</span>
        </Navbar.Brand>
        
        {/* Mobile Search Icon */}
        <div className="d-flex d-lg-none order-lg-2">
          <Button variant="link" className="text-secondary p-0 me-3">
            <Search size={20} />
          </Button>
        </div>
        
        {/* Toggle Button */}
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
          className="border-0"
        />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Desktop Search Icon */}
          <div className="d-none d-lg-flex me-3">
            <Button variant="link" className="text-secondary p-0">
              <Search size={20} />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link href="#home" className="border-bottom border-danger pb-1" style={{ borderBottomWidth: '2px' }}>Home</Nav.Link>
            <Nav.Link href="#programs">Programs</Nav.Link>
            <Nav.Link href="#coaching">Coaching</Nav.Link>
            <Nav.Link href="#membership">Membership</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>
          
          {/* Login/Sign Up Buttons */}
          <Nav className="ms-auto">
            <Button variant="outline-danger" className="me-2" size="sm">Login</Button>
            <Button variant="danger" size="sm">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FitMakerNavbar;