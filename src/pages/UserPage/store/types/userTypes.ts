import {IPost} from "../../../PostListPage/store/types/postsTypes";

export interface IUserState {
    isUserPageLoading: boolean,
    userData: IUserData,
    userPosts: IPost[],
}

export interface IUserData {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
}

export interface IUserApiResponse {
    status: number,
    data: IUserData,
}