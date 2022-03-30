import User from 'models/user/User';
import { put, call } from 'redux-saga/effects';
import { PostActions } from 'store/actions/postActions';
import { PostService } from 'services/ApiService/PostService';


export interface ResponseGenerator {
    data?: any,
    headers?: any,
    ok?: boolean
}

export function* fetchPosts() {
    const response: ResponseGenerator = yield call(PostService.getPosts)
    if (response.ok) {
        yield put(PostActions.postFetchSuccess(response.data))
        return response.data
    } else {
        const error = 'something went wrong'
        yield put(PostActions.postFetchFailure(error))
    }
}




