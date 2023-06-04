import React from 'react';
import c from "./Layout.module.sass"
import { NavLink, Outlet } from "react-router-dom";
import {Breadcrumb, Col, Container, ListGroup, Nav, Row} from "react-bootstrap";
import NavigationPanel from "../NavBar/NavigationPanel";

const Layout = () => {
    return (
        <>
            <Container fluid="md" className="mb-3">
                <Row className="justify-content-md-center">
                    <Col>
                        <NavigationPanel/>
                    </Col>
                </Row>
            </Container>

            <Outlet />

        </>
    );
};

export default Layout;