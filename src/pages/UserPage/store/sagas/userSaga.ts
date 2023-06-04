import {mainApi} from "../../../../api/mainApi";
import {takeLatest, put, call, SagaReturnType, all} from "redux-saga/effects"
import {getUserDataSagaAction} from "./userSagaActions";
import {setIsUserPageLoading, setUserData} from "../slices/userSlice";
import {PayloadAction} from "@reduxjs/toolkit";

type UserApiServiceResponse = SagaReturnType<typeof mainApi.getUserInfo>

export function* getUserDataSaga(data: PayloadAction<{userId: string}>) {
    yield put(setIsUserPageLoading(true));
    try {
        const {userId} = data.payload;
        const response: UserApiServiceResponse = yield call(mainApi.getUserInfo, userId);
        if (response.status === 200) {
            yield put(setUserData(response.data));
        }
    } catch (e: any) {
        return e
    } finally {
        yield put(setIsUserPageLoading(false));
    }
}

function* userSaga() {
    yield all([
        takeLatest(getUserDataSagaAction, getUserDataSaga)
    ])
}

export default userSaga