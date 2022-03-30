import User from "models/user/User";
import { userTypes } from "store/types/userTypes";
import { IAction } from "./IAction";


export default class UserAction {
    public static login = (requestParams: any): IAction<User> => {
        return {
            type: userTypes.LOGIN,
            payload: requestParams,
        };
    };
}