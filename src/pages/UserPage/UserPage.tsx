import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getPostsByUserIdSagaAction, getUserDataSagaAction} from "./store/sagas/userSagaActions";
import Card from "react-bootstrap/Card";
import {Button, Col, Row} from "react-bootstrap";
import {getIsUserPageLoading, getUserData, getUserPosts} from "./store/selectors/userSelectors";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Nav from "react-bootstrap/Nav";
import Post from "../../components/Post/Post";
import {BASE_ROUTE} from "../../constants/routes";

const UserPage = () => {

    const dispatch = useAppDispatch();
    const {userId} = useParams();
    const isPageLoading = useAppSelector(getIsUserPageLoading);

    useEffect(() => {
        userId && dispatch(getUserDataSagaAction({userId: Number(userId)}));
        userId && dispatch(getPostsByUserIdSagaAction({userId: Number(userId)}));
    }, [dispatch, userId])

    const userData = useAppSelector(getUserData);
    const userPosts = useAppSelector(getUserPosts);

    return (
        <>
            {
                isPageLoading
                    ?
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    :
                    <Container >
                        <Button className="mb-3">
                            <Nav.Link
                                as={Link}
                                to={BASE_ROUTE}
                            >
                                На главную
                            </Nav.Link>
                        </Button>
                        <Row className="justify-content-center mb-3">
                            <Card key={userData.id} style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src="https://w7.pngwing.com/pngs/188/501/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png" />
                                <Card.Body>
                                    <Card.Title>Ник: {userData.username}</Card.Title>
                                    <Card.Text>
                                        Имя: {userData.name}
                                    </Card.Text>
                                    <Card.Text>
                                        Почта: {userData.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Телефон: {userData.phone}
                                    </Card.Text>
                                    <Card.Text>
                                        Веб-сайт: {userData.website}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row md={3}>
                            {
                                userPosts.map(post => (
                                    <Col key={post.id}>
                                        <Post post={post} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
            }
        </>
    );
};

export default UserPage;