import PostState from "../post/PostReducerState";
import UserState from "../user/UserReducerState";

export interface StoreState {
    user: UserState,
    postReducer: PostState
}