import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavigationPanel() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Main page</Nav.Link>
                    <Nav.Link as={Link} to={"/bio"}>Bio</Nav.Link>
                    {/*<Nav.Link as={Link} to={"/"}>User</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationPanel