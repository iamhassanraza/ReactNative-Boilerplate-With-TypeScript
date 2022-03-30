import Post from "models/post/Post"
import IState from "../IState"

export default interface PostState extends IState {
    post: Post[],
}

