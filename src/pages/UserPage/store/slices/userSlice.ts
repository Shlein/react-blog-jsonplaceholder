import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserData, IUserState} from "../types/userTypes";

const initialState: IUserState = {
    userData: {
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    },
    isUserPageLoading: false,
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserData(state, {payload}: PayloadAction<IUserData>) {
            state.userData = payload
        },
        setIsUserPageLoading(state, {payload}: PayloadAction<boolean>) {
            state.isUserPageLoading = payload
        }
    }
})

export const {
    setUserData,
    setIsUserPageLoading,
} = userSlice.actions

export default userSlice.reducer