import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {Image} from "react-bootstrap";
import menuBurgerShrinked from "../../images/burger-menu-shrinked.png";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {BASE_ROUTE, ROUTE_BIO_PAGE} from "../../constants/routes";

function MenuBurger() {
    return (
        <>
            <Dropdown as={ButtonGroup} >
                <Dropdown.Toggle style={{width: 45, height: 45}} as={Image} src={menuBurgerShrinked} />
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">
                        <Nav.Link as={Link} to={BASE_ROUTE}>Main page</Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        <Nav.Link as={Link} to={ROUTE_BIO_PAGE}>Bio</Nav.Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default MenuBurger