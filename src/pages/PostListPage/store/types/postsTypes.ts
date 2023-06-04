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

export interface IPostListApiResponse {
    status: number,
    data: IPost[],
}