import { CREATE_POST, DELETE_POST } from "./constants";

function createPost(post){
    return {
        type: CREATE_POST,
        payload:{id:post.id,title:post.title,para:post.para}
    }
}

function deletePost(id){
    return {
        type:DELETE_POST,
        payload:id
    }
}
export {createPost,deletePost}