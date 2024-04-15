import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home" className='fs-5'>My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about" className='fs-5 ms-4'>About</Nav.Link>
            <Nav.Link href="#education" className='fs-5 ms-4'>Education</Nav.Link>
            <Nav.Link href="#skills" className='fs-5 ms-4'>Skills</Nav.Link>
            <Nav.Link href="#project" className='fs-5 ms-4'>Projects</Nav.Link>
            <Nav.Link href="/footer" className='fs-5 ms-4'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
