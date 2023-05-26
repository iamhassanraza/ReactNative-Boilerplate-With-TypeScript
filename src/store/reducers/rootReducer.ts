import { combineReducers } from 'redux'
import userReducer, { UserReducerState } from "store/reducers/user/userReducer";
import languageReducer, { LanguageReducerState } from './language/languageReducer';

export interface StoreState {
    user: UserReducerState,
    language: LanguageReducerState
}


export const rootReducer = combineReducers<StoreState>({
    user: userReducer,
    language: languageReducer
})