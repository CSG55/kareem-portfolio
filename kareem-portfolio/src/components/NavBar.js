import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

function NavBar() {

    return (
        <>
            <Navbar collapseOnSelect bg="light" data-bs-theme="light" expand="sm" className="bg-body-tertiary">
                <Container className="bg-body-tertiary">
                    <Link className={'navbar-brand'} to={'/'}>Kareem Khaled</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link eventKey="1" as={Link} to="/about-me">About me</Nav.Link>
                            <Nav.Link eventKey="2" as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link className={'disabled'} eventKey="3" as={Link} to="/">Adventures (Coming Soon!)</Nav.Link>
                            {/*<Nav.Link eventKey="3" as={Link} to="/contact">Contact</Nav.Link>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;