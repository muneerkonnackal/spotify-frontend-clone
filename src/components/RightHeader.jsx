import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/header.css';


function RightHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar ms-2 mt-2 me-2 rounded-3">
      <Container>
        <Navbar.Brand href="#home"><button className=' btn HR rounded-5'><i class="fa-sharp fa-solid fa-chevron-left"></i></button>
        <button  className='btn HR ms-4  rounded-5'><i class="fa-sharp fa-solid fa-chevron-right"></i></button></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link className='HR me-1' href="#features" >Premium</Nav.Link>
            <Nav.Link className='HR me-1' href="#pricing"  >Support</Nav.Link>
            <Nav.Link href="#pricing" className='HR me-4'  >Download</Nav.Link>
            
          </Nav>
          <h3 className='fw-normal text-white  me-4' >|</h3>
          <Nav>
            <button className='btn  HR me-4 fw-bold  ' >Sign up</button>
            <button className='btn HR fw-bold text-black bg-white  border rounded-5' style={{width:"100px", height:"45px"}}>Log in</button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RightHeader