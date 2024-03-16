import './CustomNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from "react";

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar expanded={expanded} expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/escritorio">Escritorio</Nav.Link>
                            <Nav.Link as={Link} to="/areasDeAtuacao">Areas de Atuacao</Nav.Link>
                            <Nav.Link as={Link} to="/equipe">Equipe</Nav.Link>
                            <Nav.Link as={Link} to="/junteseANos">Junte-se a nos</Nav.Link>
                            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default CustomNavbar;
