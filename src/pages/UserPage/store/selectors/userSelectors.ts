import {RootState} from "../../../../redux/rootReducer";
import {IUserData} from "../types/userTypes";
import {IPost} from "../../../PostListPage/store/types/postsTypes";

export const getUserData = (state: RootState): IUserData => {
    return state.userSlice.userData
}
export const getUserPosts = (state: RootState): IPost[] => {
    return state.userSlice.userPosts
}

export const getIsUserPageLoading = (state: RootState): boolean => {
    return state.userSlice.isUserPageLoading
}