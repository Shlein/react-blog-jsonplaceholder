import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getPostListSaga} from "./store/sagas/postsSaga";
import {getPostListSagaAction} from "./store/sagas/postsSagaActions";
import {getIsPostListPageLoading, getPostList} from "./store/selectors/postsSelectors";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import {Button, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {ROUTE_USER_PAGE} from "../../constants/routes";
import Spinner from "react-bootstrap/Spinner";

const PostListPage = () => {

    const dispatch = useAppDispatch();
    const postList = useAppSelector(getPostList);
    const isPageLoading = useAppSelector(getIsPostListPageLoading);

    useEffect(() => {
        dispatch(getPostListSagaAction())
    }, [dispatch])

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
                        <Container>
                            <Row className="gap-5 justify-content-center">
                                {postList.map((post) => {
                                    return (
                                        <Card key={post.id} style={{ width: '18rem' }}>
                                            <Nav.Link
                                                as={Link}
                                                to={ROUTE_USER_PAGE + `/${post.userId}`}
                                            >
                                                <Card.Img
                                                    variant="top"

                                                    src="https://storage.googleapis.com/go-merchant-production.appspot.com/content/images/2019/06/5-Situs-e-Commerce-dengan-Konten-Blog-Terbaik.jpg"
                                                />
                                            </Nav.Link>
                                            <Card.Body>
                                                <Card.Title>{post.title}</Card.Title>
                                                <Card.Text>
                                                    {post.body}
                                                </Card.Text>
                                                <Button>Комментарии</Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                            </Row>
                        </Container>
            }
        </>
    );
};

export default PostListPage;