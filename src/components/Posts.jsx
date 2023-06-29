import React,{useState} from 'react'
import './posts.css'
import { useDispatch, useSelector } from 'react-redux'
import {createPost} from '../app/redux/actions'
import { nanoid } from '@reduxjs/toolkit'
export default function Posts() {

    const fields={ id: nanoid(), title: "", para: "" }

    const [postData, setPostData] = useState(fields)

    const dispatch = useDispatch()

    const handlePost =()=>{
        
        setPostData(fields)
        dispatch(createPost(postData))
    }

    return (
        <div className='container'>
            <div className='posts'>
                <div className='create-posts'>
                    <form>
                        <h2 style={{ text: "center" }}>Create A New Post</h2>

                        <label htmlFor='title'>Title : </label><br />
                        <input
                            type='text'
                            id="title"
                            value={postData.title}
                            placeholder='Enter post title here'
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        /><br />

                        <label htmlFor='para'>Paragraph : </label> <br />
                        <textarea
                            id="para"
                            value={postData.para}
                            placeholder='enter post paragraph here'
                            onChange={(e) => setPostData({ ...postData, para: e.target.value })}
                        >
                        </textarea><br />
                        <button type='button' onClick={handlePost}>Create Posts</button>
                    </form>
                </div>
            </div>
        </div>
    )
}