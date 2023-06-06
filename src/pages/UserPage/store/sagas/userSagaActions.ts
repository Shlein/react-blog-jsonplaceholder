import {createAction} from "@reduxjs/toolkit";

export const getUserDataSagaAction =
    createAction<{ userId: number }>("GET_USER_INFO")
export const getPostsByUserIdSagaAction =
    createAction<{ userId: number }>("GET_POSTS_BY_USER_ID")