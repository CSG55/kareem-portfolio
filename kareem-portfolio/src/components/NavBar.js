import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar data-bs-theme="light">
                <Container>
                    {/*<Navbar.Brand href="#home">Kareem</Navbar.Brand>*/}
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Adventures</Nav.Link>
                        <Nav.Link href="#features">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Skills</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;