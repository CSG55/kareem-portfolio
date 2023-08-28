import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="sm" className="bg-body-tertiary">
                <Container className="bg-body-tertiary">
                    <Navbar.Brand href='/' onClick={() => navigate('/')}>Kareem Khaled</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="ml-auto" href="#home">Adventures</Nav.Link>
                            <Nav.Link className="ml-auto" href="/projects" onClick={() => navigate('/projects')}>Projects</Nav.Link>
                            <Nav.Link className="ml-auto" href="#pricing">Skills</Nav.Link>
                            <Nav.Link className="ml-auto" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;