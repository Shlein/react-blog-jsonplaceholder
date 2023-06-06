export interface IPostListState {
    isPostListPageLoading: boolean,
    postList: IPost[],
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface IPostListApiResponse {
    status: number,
    data: IPost[],
}

export interface ICommentsApiResponse {
    status: number,
    data: IComment[],
}