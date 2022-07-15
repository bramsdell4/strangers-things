import React, { useEffect, useState } from "react";
//import {fetchPosts} from "../utility/api";

const strangerThingsAPI_URL = 'https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/posts'
/*
fetch(strangerThingsAPI_URL)
.then(response => response.json())
.then(data => {console.log(data)})
*/


const Posts = ({posts, setPosts}) => {

    //const [search, setSearch] = useState('');
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch(strangerThingsAPI_URL);
        const data = await response.json();
       console.log('data: ', data);
       setPosts(data);
      }
      fetchPosts();
    }, []);
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