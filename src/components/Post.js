import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './Post.css'
import EditForm from './forms/EditForm'

function Post({ data, getPosts }) {
    const [edit, setEdit] = useState(false)

    let deleteHandler = (id) => {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                getPosts()
            })
    }

    return (
        <div className='post' key={data._id}>
            {
                edit ? <EditForm setEdit={setEdit} data={data} getPosts={getPosts} /> :
                    <>
                        <h3>Title: {data.title}</h3>
                        <h4>Description: {data.description}</h4>
                    </>
            }
            <div className='buttonContainer'>
                <Button onClick={(e) => setEdit(true)} variant='warning'>Edit</Button>
                <Button onClick={(e) => deleteHandler(data._id)} variant='danger'>Delete</Button>
            </div>
        </div>
    )
}

export default Post