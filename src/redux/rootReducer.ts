import {combineReducers} from '@reduxjs/toolkit'
import postsSlice from "../pages/PostListPage/store/slices/postsSlice";
import userSlice from "../pages/UserPage/store/slices/userSlice";

export const rootReducer = combineReducers({
    postListReducer: postsSlice,
    userSlice: userSlice,
})

export type RootState = ReturnType<typeof rootReducer>