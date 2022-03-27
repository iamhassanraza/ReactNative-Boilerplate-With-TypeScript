import User from "models/user/User";
import { userTypes } from "store/types/userTypes";
import { IAction } from "./IAction";


export default class UserAction {
    public static login = (requestParams: Object): IAction<Object> => {
        return {
            type: userTypes.LOGIN,
            payload: requestParams,
        };
    };

    public static loginSuccess = (user: User): IAction<User> => {
        return {
            type: userTypes.LOGIN_SUCCESS,
            payload: user,
        };
    };

}