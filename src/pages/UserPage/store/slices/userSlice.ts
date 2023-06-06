import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserData, IUserState} from "../types/userTypes";
import {IPost} from "../../../PostListPage/store/types/postsTypes";

const initialState: IUserState = {
    userData: {
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    },
    userPosts: [],
    isUserPageLoading: false,
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserData(state, {payload}: PayloadAction<IUserData>) {
            state.userData = payload
        },
        setUserPosts(state, {payload}: PayloadAction<IPost[]>) {
            state.userPosts = payload
        },
        setIsUserPageLoading(state, {payload}: PayloadAction<boolean>) {
            state.isUserPageLoading = payload
        }
    }
})

export const {
    setUserData,
    setUserPosts,
    setIsUserPageLoading,
} = userSlice.actions

export default userSlice.reducer