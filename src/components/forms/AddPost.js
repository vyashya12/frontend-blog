import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function AddPost({getPosts}) {
    const [postData, setPostData] = useState({})

    let onChangeHandler = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    let onSubmitHandler = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/posts/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => {
            e.target.reset()
            getPosts()
        })
    }
  return (
    <div className='form'>
        <Form onSubmit={onSubmitHandler}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' name='title' onChange={onChangeHandler} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' name='description' onChange={onChangeHandler} />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    </div>
  )
}

export default AddPost