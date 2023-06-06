import {mainApi} from "../api/mainApi";
import {IPost} from "../pages/PostListPage/store/types/postsTypes";

export async function getPostsByUserId(userId: number): Promise<IPost[]> {
    const response = await mainApi.getPostsByUserId(userId);
    return response.data
}