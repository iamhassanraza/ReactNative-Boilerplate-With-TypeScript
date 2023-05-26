import { IUser, LoginAction, LogoutAction, UserActionTypes } from 'store/types';



export class UserActions {
    public static login = (user: IUser): LoginAction => ({
        type: UserActionTypes.LOGIN,
        payload: { user },
    });


    public static logout = (): LogoutAction => ({
        type: UserActionTypes.LOGOUT,

    });


}