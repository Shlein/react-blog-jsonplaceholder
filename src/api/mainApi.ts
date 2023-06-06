import axiosInstance from "./axiosConfig";
import {ICommentsApiResponse, IPostListApiResponse} from "../pages/PostListPage/store/types/postsTypes";
import {IUserApiResponse} from "../pages/UserPage/store/types/userTypes";
import {delay} from "../utils/delay";

// базовый url оканчивается на на "/"
const postsUrl = "/posts/";
const userUrl = "/users/"

export const mainApi = {
    async getAllPosts(): Promise<IPostListApiResponse> {
        try {
            await delay(500);
            return await axiosInstance.get(postsUrl);
        } catch (e: any) {
            return e
        }
    },
    async getUserInfo(userId: string): Promise<IUserApiResponse> {
        try {
            await delay(500);
            return await axiosInstance.get(userUrl + userId);
        } catch (e: any) {
            return e
        }
    },
    async getPostsByUserId(userId: number): Promise<IPostListApiResponse> {
        try {
            await delay(500);
            return await axiosInstance.get(userUrl + userId + "/posts");
        } catch (e: any) {
            return e
        }
    },
    async getCommentsByPostId(postId: number): Promise<ICommentsApiResponse> {
        try {
            await delay(500);
            return await axiosInstance.get(postsUrl + postId + "/comments");
        } catch (e: any) {
            return e
        }
    },
}