import React from 'react';
import Card from "react-bootstrap/Card";
import {IComment} from "../../pages/PostListPage/store/types/postsTypes";

interface IProps {
    comment: IComment,
}
const Comment: React.FC<IProps> = (props) => {
    const {name, email, body} = props.comment;
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title style={{fontSize: 12, fontWeight: 800}}>{name}</Card.Title>
                <Card.Text style={{fontSize: 12, fontWeight: 500}}>{email}</Card.Text>
                <Card.Text style={{fontSize: 12, fontWeight: 400}}>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Comment;