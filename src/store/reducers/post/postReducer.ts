
import PostState from "store/states/post/PostReducerState"

import { iDataState } from "store/states/IState"
import { IAction } from "store/actions/IAction"
import { postTypes } from "store/types/postTypes"
import Post from "models/post/Post"

export default class PostReducer {
    private static readonly _initialState: PostState = {
        post: [],
        //below will be common in every reducer state as it is being extended from Istate
        state: iDataState.initial,
        errorMessage: ""
    }

    public static reducer(postState: PostState = PostReducer._initialState, action: IAction<any | Post[] | Post>): PostState {

        switch (action.type) {
            case postTypes.FETCT_POST_REQUEST:
                return {
                    ...postState,
                    state: iDataState.loading,
                    errorMessage: "",
                }
            case postTypes.FETCH_POST_SUCCESS:
                return {
                    post: action.payload,
                    state: iDataState.loaded,
                    errorMessage: "",
                }

            case postTypes.FETCH_POST_FAILURE:
                return {
                    ...postState,
                    state: iDataState.error,
                    errorMessage: action.error,
                }
            case postTypes.ADD_POST:
                return {
                    post: [action.payload, ...postState.post],
                    state: iDataState.error,
                    errorMessage: action.error,
                }

            default:
                return postState
        }
    }

}