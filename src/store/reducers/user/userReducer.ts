import { UserActions, UserActionTypes, IUser } from "store/types";


export interface UserReducerState {
    isLoggedIn: boolean;
    user: IUser | null
}

const initialState: UserReducerState = {
    isLoggedIn: false,
    user: null,
};

const userReducer = (state: UserReducerState = initialState, action: UserActions): UserReducerState => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                isLoggedIn: true,
                user: action.payload.user
            };
        case UserActionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;