import {RootState} from "../../../../redux/rootReducer";
import {IUserData} from "../types/userTypes";

export const getUserData = (state: RootState): IUserData => {
    return state.userSlice.userData
}

export const getIsUserPageLoading = (state: RootState): boolean => {
    return state.userSlice.isUserPageLoading
}