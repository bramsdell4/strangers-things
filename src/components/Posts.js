import React, { useEffect, useState } from "react";
//import {fetchPosts} from "../utility/api";


//look up promises
/*
fetch(strangerThingsAPI_URL)
.then(response => response.json())
.then(data => {console.log(data)})
*/


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState('')
  //const [search, setSearch] = useState('');
  useEffect(() => {
    const apiCall = async () => {
      const result = await fetch('https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/posts');
      const data = await result.json();
      setPosts(data.data.posts)
     console.log(data)
    }
    apiCall()
   
  },
[]
  )


  return <><div>
  <h1>Posts</h1>
  <ul>
  {
    posts.map(post => <li className="post" key={post._id}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      </li>
    )
  }
</ul>
</div>
</>



}

export default Posts