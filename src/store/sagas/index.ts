import { all, takeEvery } from "redux-saga/effects";



import { userTypes } from "store/types/userTypes";
import { login } from "./userSaga";


export default function* rootSaga() {
    yield all([takeEvery(userTypes.LOGIN, login)]);
}
