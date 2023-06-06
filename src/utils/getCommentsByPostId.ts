import {mainApi} from "../api/mainApi";
import {IComment} from "../pages/PostListPage/store/types/postsTypes";

export async function getCommentsByPostId(postId: number): Promise<IComment[]> {
    const response = await mainApi.getCommentsByPostId(postId);
    return response.data
}