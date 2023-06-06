import {mainApi} from "../../../../api/mainApi";
import {takeLatest, put, call, SagaReturnType, all} from "redux-saga/effects"
import {getPostsByUserIdSagaAction, getUserDataSagaAction} from "./userSagaActions";
import {setIsUserPageLoading, setUserData, setUserPosts} from "../slices/userSlice";
import {PayloadAction} from "@reduxjs/toolkit";

type GetUserDataApiServiceResponse = SagaReturnType<typeof mainApi.getUserInfo>;
type GetPostsByUserIdApiServiceResponse = SagaReturnType<typeof mainApi.getPostsByUserId>;

export function* getUserDataSaga(data: PayloadAction<{userId: number}>) {
    yield put(setIsUserPageLoading(true));
    try {
        const {userId} = data.payload;
        const response: GetUserDataApiServiceResponse = yield call(mainApi.getUserInfo, userId);
        if (response.status === 200) {
            yield put(setUserData(response.data));
        }
    } catch (e: any) {
        return e
    } finally {
        yield put(setIsUserPageLoading(false));
    }
}

export function* getPostsByUserIdSaga(data: PayloadAction<{userId: number}>) {
    yield put(setIsUserPageLoading(true));
    try {
        const {userId} = data.payload;
        const response: GetPostsByUserIdApiServiceResponse = yield call(mainApi.getPostsByUserId, userId);
        if (response.status === 200) {
            yield put(setUserPosts(response.data));
        }
    } catch (e: any) {
        return e
    } finally {
        yield put(setIsUserPageLoading(false));
    }
}

function* userSaga() {
    yield all([
        takeLatest(getUserDataSagaAction, getUserDataSaga),
        takeLatest(getPostsByUserIdSagaAction, getPostsByUserIdSaga),
    ])
}

export default userSaga