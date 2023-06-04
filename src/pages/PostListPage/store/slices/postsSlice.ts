import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost, IPostListState} from "../types/postsTypes";

const initialState: IPostListState = {
    isPostListPageLoading: false,
    postList: [],
}

const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {
        setPostList(state, {payload}: PayloadAction<IPost[]>) {
            state.postList = payload
        },
        setIsPostListPageLoading(state, {payload}: PayloadAction<boolean>) {
            state.isPostListPageLoading = payload
        }
    }
})

export const {
    setPostList,
    setIsPostListPageLoading,
} = postsSlice.actions

export default postsSlice.reducer