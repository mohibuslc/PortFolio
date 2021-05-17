import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png';
import './Mynevbar.css';

const Mynevbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#hero">

<img className='mylogo' src ={logo} alt='My Logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link className="design"href="/Hero">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#skills">SKILLS</Nav.Link>
      <Nav.Link href="#Project">PROJECT</Nav.Link>
      <Nav.Link href="#Contact">CONTRACT</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Mynevbar;