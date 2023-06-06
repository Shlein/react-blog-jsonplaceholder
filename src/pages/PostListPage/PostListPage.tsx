import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getPostListSagaAction} from "./store/sagas/postsSagaActions";
import {getIsPostListPageLoading, getPostList} from "./store/selectors/postsSelectors";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {ROUTE_USER_PAGE} from "../../constants/routes";
import Spinner from "react-bootstrap/Spinner";
import {getCommentsByPostId} from "../../utils/getCommentsByPostId";
import {IComment} from "./store/types/postsTypes";
import Comment from "../../components/Comment/Comment";
import Post from "../../components/Post/Post";

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
                            <Row md={3} className=" justify-content-center">
                                {postList.map((post) => (
                                    <Col key={post.id}>
                                        <Post post={post} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
            }
        </>
    );
};

export default PostListPage;