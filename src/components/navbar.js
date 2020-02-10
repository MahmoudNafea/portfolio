import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Background from './background';

const NavbarPage = () => {

    return (

        <div className="mynav">
            <Container >
                <Navbar expand="sm"  >
                    <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto ">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/work">Work</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container >
        </div>
    )
}

export default NavbarPage