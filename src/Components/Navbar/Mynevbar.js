import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../Asst/logo.png';
import './Mynevbar.css';

const Mynevbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">

<img className='mylogo' src ={logo} alt=' My Logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto " >
      <Nav.Link className="design"href="#Home">HOME</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Experiance">Experience</Nav.Link>
      <Nav.Link href="#Project">Project</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Mynevbar;