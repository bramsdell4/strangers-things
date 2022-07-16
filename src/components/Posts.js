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
  //const [search, setSearch] = useState('');
  useEffect(() => {
    const apiCall = async () => {
      const result = await fetch('https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/posts');
      const data = await result.json();
      setPosts(data.data.posts)
     console.log(data)
    }
    apiCall()
   
  }

  )


  return <>
    <h1>Posts</h1>
    {
      posts.map(post => <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>)

    }


  </>


}

export default Posts