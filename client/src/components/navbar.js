import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarPage = () => {

    return (
        <div>
            <Container >
                <Navbar expand="sm"  >
                    <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto " >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/work">Work</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container >
        </div>
    )
}
export default NavbarPage