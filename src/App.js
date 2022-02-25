import { useEffect, useState } from "react"
import Post from "./components/Post"
import './App.css'
import AddPost from "./components/forms/AddPost"

function App() {
  const [post, setPost] = useState([])

  let getPosts = () => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => setPost(data.posts))
  }

  useEffect(() => {
    getPosts()
  }, [])

  let showPosts = post.map(item => <Post data={item} key={item._id} getPosts={getPosts}/>)
  return (
    <div className="App">
      <h1>Blog frontend</h1>
      <AddPost getPosts={getPosts}/>
      {showPosts}
    </div>
  )
}

export default App
