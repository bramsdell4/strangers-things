import { useState } from "react"







const FeaturedPost = ({user, token, posts, setPosts}) => {
    const [featuredPost, setFeaturedPost] = useState('')
    useEffect(() => {
        const apiCall = async () => {
          const result = await fetch(`https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/posts`);
          const data = await result.json();
          setPosts(data.data.posts)
         console.log(data)
        }
        apiCall()
       
      },
    []
      )



      return <>
      <div>
the goal is to make the section expand rather than have a segment 'pop up',
 i have to make the api call to the specific post(a click handler on the line items i thought)
and it would add to the section giving the 'expanding' feel.
close button would revert it to natural 'state'





      </div>
      
      
      </>

}

export default FeaturedPost