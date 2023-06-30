import React from 'react'
import './showposts.css'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../app/redux/actions'

export default function ShowPosts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    return (
        <div className="show-posts-container">
            <h2 style={{ textAlign: "center" }}>All Posted Posts</h2>
            <div className="show-posts">
                {
                    posts.map(post => {
                        return <div className="post" key={post.id}>
                            <div className="post-title">
                                <h4>Post Title : </h4>
                                <p>{post.title}</p>
                            </div>
                            <div className='post-para'>
                                <h4>Paragraph : </h4>
                                <p>{post.para}</p>
                            </div>
                            <div className='post-actions'>
                                <button
                                    type='button'
                                    id="delete"
                                    onClick={() => dispatch(deletePost(post.id))}
                                >Delete</button>
                                <button
                                    type='button'
                                    id='edit'
                                >Edit</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}