import { combineReducers } from 'redux'
import { StoreState } from 'store/states/root/RootState'

import UserReducer from './user/userReducer'



export const rootReducer = combineReducers<StoreState>({
    user: UserReducer.reducer
})