import User from 'models/user/User';
import { put, call } from 'redux-saga/effects';
import UserAction from 'store/actions/userActions';


export function* login() {
    // const user = yield call()
    console.log('login saga called')
    const user: User = {
        name: 'Hassan',
        avatar: 'SomeAvatar'
    }

    yield put(UserAction.loginSuccess(user))
}
