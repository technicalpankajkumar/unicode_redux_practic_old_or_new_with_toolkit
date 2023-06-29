import { CREATE_POST } from "../constants";

function createPost(post){
    return {
        type: CREATE_POST,
        payload:{id:post.id,title:post.title,para:post.para}
    }
}

export {createPost}