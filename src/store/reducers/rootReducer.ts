import { combineReducers } from 'redux'
import { StoreState } from 'store/states/root/RootState'

import UserReducer from './user/userReducer'
import PostReducer from './post/postReducer'


export const rootReducer = combineReducers<StoreState>({
    user: UserReducer.reducer,
    postReducer: PostReducer.reducer
})