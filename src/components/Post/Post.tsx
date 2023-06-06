import React, {useState} from 'react';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {ROUTE_USER_PAGE} from "../../constants/routes";
import Card from "react-bootstrap/Card";
import {Button, Row} from "react-bootstrap";
import Comment from "../Comment/Comment";
import {IComment, IPost} from "../../pages/PostListPage/store/types/postsTypes";
import {getCommentsByPostId} from "../../utils/getCommentsByPostId";
import Container from "react-bootstrap/Container";

interface IProps {
    post: IPost,
}
const Post: React.FC<IProps> = (props) => {

    const {userId, id, title, body} = props.post;
    const [comments, setComments] = useState<IComment[]>([]);
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    async function handleComments(postId: number) {
        setIsCommentsVisible(!isCommentsVisible);
        if (!comments.length) {
            const response = await getCommentsByPostId(postId);
            setComments(response)
        }
    }

    return (
        <Container>
             <Row>
                <Card key={id} className="mb-3">
                    <Nav.Link
                        as={Link}
                        to={ROUTE_USER_PAGE + `/${userId}`}
                    >
                        <Card.Img
                            variant="top"

                            src="https://storage.googleapis.com/go-merchant-production.appspot.com/content/images/2019/06/5-Situs-e-Commerce-dengan-Konten-Blog-Terbaik.jpg"
                        />
                    </Nav.Link>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <Button
                            onClick={() => handleComments(id)}
                        >
                            Комментарии
                        </Button>
                        {/*{*/}
                        {/*    isCommentsVisible*/}
                        {/*    && comments.map(comment => (*/}
                        {/*        <Comment comment={comment} key={comment.id}/>*/}
                        {/*    ))*/}
                        {/*}*/}

                    </Card.Body>
                </Card>
            </Row>
            <Row>
                {
                    isCommentsVisible
                    && comments.map(comment => (
                        <Comment comment={comment}/>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Post;