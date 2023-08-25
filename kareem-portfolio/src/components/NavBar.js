import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";

function NavBar() {
    return (
        <>
            {/*<Navbar  bg="light" data-bs-theme="light">*/}
            {/*    <Container>*/}
            {/*        <Navbar.Brand href="#home">Kareem Khaled</Navbar.Brand>*/}
            {/*        <Nav className="ml-auto">*/}
            {/*            <Nav.Link className="ml-auto" href="#home">Adventures</Nav.Link>*/}
            {/*            <Nav.Link className="ml-auto" href="#features">Projects</Nav.Link>*/}
            {/*            <Nav.Link className="ml-auto" href="#pricing">Skills</Nav.Link>*/}
            {/*            <Nav.Link className="ml-auto" href="#contact">Contact</Nav.Link>*/}
            {/*        </Nav>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
            <Navbar bg="light" data-bs-theme="light" expand="sm" className="bg-body-tertiary">
                <Container className="bg-body-tertiary">
                    <Navbar.Brand href="#home">Kareem Khaled</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="ml-auto" href="#home">Adventures</Nav.Link>
                            <Nav.Link className="ml-auto" href="#features">Projects</Nav.Link>
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