import Navbar from 'react-bootstrap/Navbar';
import MenuBurger from "../MenuBurger/MenuBurger";
import Container from "react-bootstrap/Container";

function NavigationPanel() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <MenuBurger />
            </Container>
        </Navbar>
    );
}

export default NavigationPanel