import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function theNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Jugraj N</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/Projects">Portfolio</Nav.Link>
                        <Nav.Link href="/Tech">Resume</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default theNavbar;