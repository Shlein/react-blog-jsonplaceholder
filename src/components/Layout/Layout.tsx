import React from 'react';
import c from "./Layout.module.sass"
import { NavLink, Outlet } from "react-router-dom";
import {ROUTE_BIO_PAGE, ROUTE_POSTS_PAGE, ROUTE_USER_PAGE} from "../../constants/routes";
import {Breadcrumb, Col, Container, ListGroup, Nav, Row} from "react-bootstrap";
import NavigationPanel from "../NavBar/NavigationPanel";

const Layout = () => {
    return (
        <>
            <Container fluid="md">
                <Row className="justify-content-md-center">
                    <Col>
                        <NavigationPanel />
                    </Col>
                </Row>
            </Container>

            <Outlet />

        </>
    );
};

export default Layout;