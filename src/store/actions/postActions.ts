import { postTypes } from "store/types/postTypes";
import { IAction } from "./IAction";
import Post from "models/post/Post";


export class PostActions {

    public static postFetchRequest = (): IAction<null> => {
        return {
            type: postTypes.FETCT_POST_REQUEST,
        };
    };

    public static postFetchSuccess = (data: Post[]): IAction<Post[]> => {
        return {
            type: postTypes.FETCH_POST_SUCCESS,
            payload: data,
        };
    };
    public static postFetchFailure = (msg: string): IAction<Post> => {
        return {
            type: postTypes.FETCH_POST_FAILURE,
            error: msg,
        };
    };

    public static addPost = (post: Post): IAction<Post> => {
        return {
            type: postTypes.ADD_POST,
            payload: post,
        };
    };


}