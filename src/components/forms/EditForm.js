import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function EditForm({ setEdit, data, getPosts }) {
    const [post, setPost] = useState({})

    let onChangeHandler = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }


    let onSubmitHandler = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/posts/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                getPosts()
                setEdit(false)
            })
    }
    return (
        <div>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group>
                    <Form.Label>
                        Title
                    </Form.Label>
                    <Form.Control type='text' name='title' onChange={onChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Description
                    </Form.Label>
                    <Form.Control type='text' name='description' onChange={onChangeHandler} />
                </Form.Group>
                <Button variant='success' type='submit'>Submit</Button>
            </Form>
            <Button onClick={(e) => setEdit(false)} variant='secondary'>Cancel</Button>
        </div>
    )
}

export default EditForm