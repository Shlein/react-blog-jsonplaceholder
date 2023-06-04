import {mainApi} from "../../../../api/mainApi";
import {takeLatest, put, call, SagaReturnType, all} from "redux-saga/effects"
import {setIsPostListPageLoading, setPostList} from "../slices/postsSlice";
import {getPostListSagaAction} from "./postsSagaActions";

type PostListApiResponse = SagaReturnType<typeof mainApi.getAllPosts>

export function* getPostListSaga() {
    yield put(setIsPostListPageLoading(true));
    try {
        const response: PostListApiResponse = yield call(mainApi.getAllPosts);
        if (response.status === 200) {
            yield put(setPostList(response.data));
        }
    } catch (e: any) {
        return e
    } finally {
        yield put(setIsPostListPageLoading(false));
    }
}

function* postListSaga() {
    yield all([
        takeLatest(getPostListSagaAction, getPostListSaga)
    ])
}

export default postListSaga