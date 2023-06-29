import React from 'react'
import './showposts.css'
import { useSelector } from 'react-redux'

export default function ShowPosts() {

    const posts = useSelector(state => state.posts)
    console.log(posts)

    return (
        <div className="show-posts-container">
            <div className="show-posts">
                <h3 style={{ textAlign: "center" }}>All Posted Posts</h3>
                {
                    posts.map(posts => {
                        <div className="post">
                            <div className="post-title">
                                <h4>Post Title : </h4>
                                <p>{posts.title}</p>
                            </div>
                            <div className='post-para'>
                                <h4>Paragraph : </h4>
                                <p>{posts.para}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}