import React from 'react';
import c from "./BioPage.module.sass";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {Button, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const BioPage = () => {
    return (
        <Container className="mb-5">
            <Button className="mb-3">
                <Nav.Link
                    as={Link}
                    to={"/"}
                >
                    На главную
                </Nav.Link>
            </Button>
            <Row md={2} className="justify-content-center">
                <Card className="pt-2">
                    <Card.Title>Шлеин Даниил Денисович</Card.Title>
                    <Card.Body>
                        <Card.Img src="https://resizer.mail.ru/p/f1d84cb2-ac30-5f74-b440-ac32da144626/AAAKJEVi4Jasz-5vO12qS9X-sD30ag9Sp-zZRkPPaH894OjPEPdW_Uov4iTwZrK9pKQwWGozsSewfX-mm80rlaxdRVo.jpg" />
                        <Card.Text>Фронтенд разработчик</Card.Text>
                        <Card.Text>Опыт работы: 1 год</Card.Text>
                        <Card.Text>24 года</Card.Text>
                        <Card.Text>Ссылка на репозиторий данного проекта: https://github.com/Shlein/react-blog-jsonplaceholder</Card.Text>
                        <Card.Text>Ссылка на личный гитхаб: https://github.com/Shlein</Card.Text>
                        <Card.Text>Хобби: баскетбол, Что?Где?Когда?, тренажерный зал</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default BioPage;