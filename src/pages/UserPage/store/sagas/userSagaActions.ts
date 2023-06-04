import {createAction} from "@reduxjs/toolkit";

export const getUserDataSagaAction = createAction<{ userId: string }>("GET_USER_INFO")