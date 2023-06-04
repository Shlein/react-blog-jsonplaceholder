import {RootState} from "../../../../redux/rootReducer";
import {IPost} from "../types/postsTypes";

export const getPostList = (state: RootState): IPost[] => {
    return state.postListReducer.postList
}

export const getIsPostListPageLoading = (state: RootState): boolean => {
    return state.postListReducer.isPostListPageLoading
}