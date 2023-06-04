import {all, fork} from 'redux-saga/effects'
import postListSaga from "../../pages/PostListPage/store/sagas/postsSaga";
import userSaga from "../../pages/UserPage/store/sagas/userSaga";

export default function* rootSaga() {
    yield all([
        fork(postListSaga),
        fork(userSaga),
    ])
}