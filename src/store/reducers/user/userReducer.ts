
import UserState from "store/states/user/UserReducerState"
import { iDataState } from "store/states/IState"
import { userTypes } from "store/types/userTypes"
import User from "models/user/User"
import { IAction } from "store/actions/IAction"

export default class UserReducer {
    private static readonly _initialState: UserState = {
        user: undefined,
        //below will be common in every reducer state as it is being extended from Istate
        state: iDataState.initial,
        errorMessage: ""
    }

    public static reducer(state: UserState = UserReducer._initialState, action: IAction<any | User>): UserState {
        switch (action.type) {


            case userTypes.LOGIN:
                return {
                    ...state,
                    state: iDataState.loading,
                    errorMessage: ""
                }

            case userTypes.LOGIN_SUCCESS:
                return {
                    ...state,
                    user: action.payload,
                    state: iDataState.loaded,
                    errorMessage: ""
                }

            case userTypes.LOGIN_FAILURE:
                return {
                    ...state,
                    state: iDataState.error,
                    errorMessage: action.error
                }
            default:
                return state
        }
    }

}