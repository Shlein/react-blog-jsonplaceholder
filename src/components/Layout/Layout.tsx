import React from 'react';
import c from "./Layout.module.sass"
import { NavLink, Outlet } from "react-router-dom";
import {ROUTE_BIO_PAGE, ROUTE_POSTS_PAGE, ROUTE_USER_PAGE} from "../../constants/routes";
import {Breadcrumb, Col, Container, ListGroup, Nav, Row} from "react-bootstrap";

const Layout = () => {
    return (
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                    <Nav defaultActiveKey="/" variant="pills" className={c.NavContainer}>
                        <Nav.Item>
                            <NavLink to={"/"}>Посты</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={ROUTE_BIO_PAGE}>Био</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to={ROUTE_USER_PAGE}>Юзер</NavLink>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col>klsfv</Col>
            </Row>

            <h1>Добро пожаловать в приложение-блог, в котором используются</h1>

            <ListGroup>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>React-bootstrap</ListGroup.Item>
                <ListGroup.Item>React-router</ListGroup.Item>
                <ListGroup.Item>Axios</ListGroup.Item>
                <ListGroup.Item>Redux</ListGroup.Item>
                <ListGroup.Item>Redux-saga</ListGroup.Item>
                <ListGroup.Item>Git</ListGroup.Item>
            </ListGroup>

            <Outlet />

            <footer>footer</footer>
        </Container>
    );
};

export default Layout;