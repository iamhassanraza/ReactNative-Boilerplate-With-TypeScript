import { all, takeEvery, takeLatest } from "redux-saga/effects";



import { userTypes, postTypes } from "store/types/index";

import { fetchPosts } from "./postSaga";
import { login } from "./userSaga";


export default function* rootSaga() {
    yield all([takeEvery(userTypes.LOGIN, login),
    takeLatest(postTypes.FETCT_POST_REQUEST, fetchPosts)]);
}
