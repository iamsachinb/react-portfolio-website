import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Custom CSS for additional styles
import { useState,useEffect } from 'react';
import './styles.css'

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeBackground);
    }, []);
  
    return (
        <Navbar
          className={navbar ? 'navbar active' : 'navbar'}
          expand="lg"
          fixed="top"
        >
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
};

export default Header;
