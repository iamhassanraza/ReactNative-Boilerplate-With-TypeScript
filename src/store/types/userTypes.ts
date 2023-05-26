
export enum UserActionTypes {
    LOGOUT = 'LOGOUT',
    LOGIN = 'LOGIN'
}

export interface IUser {
    id: string;
    name: string;
    job: string;
    email: string
}
export interface LoginAction {
    type: typeof UserActionTypes.LOGIN;
    payload: {
        user: IUser;
    };
}

export interface LogoutAction {
    type: typeof UserActionTypes.LOGOUT;
}



export type UserActions =
    | LoginAction
    | LogoutAction
