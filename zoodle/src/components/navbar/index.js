import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarElement.css'


const Navbar2 = () => {
    return (
    <Navbar bg="light" expand="lg" fixed='top'>
        <Container>
            <Navbar.Brand href="/"><img src="zsmaller.png" className='zlogo' alt=''/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/about">Why Zoodle? |</Nav.Link>
                    <Nav.Link href="/signin">Sign In |</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbar2
