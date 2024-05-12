import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Register from './Register';
import Login from './Login';
import { Link  } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>  
        <Navbar.Brand >Form Handling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
             
</Navbar.Collapse>
      </Container>
      
    </Navbar>
 
  )
}

export default Header