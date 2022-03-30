import { readResource } from "services/NetworkService";

function getPosts() {
    const resource = 'posts'
    return readResource({ resource })
}


export const PostService = {
    getPosts
}
