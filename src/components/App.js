import React , {useState} from "react";
import { NavLink, Route} from "react-router-dom";
import Posts from "./Posts";
import Account from "./Account"

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('')
    const [user, setUser] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [featuredPost, setFeaturedPost] = useState('')



    return <main>
        <nav>
        <NavLink exact to="/" className="navlink" activeClassName="active">
            Home 
            </NavLink>
        <NavLink to="/posts" className="navlink" activeClassName="active">
            Posts 
            </NavLink>
        <NavLink to="/account" className="navlink" activeClassName="active">
            Log In/Register
            </NavLink>

        </nav>
        <Route exact path="/"><div>hello</div></Route>
        <Route path="/posts">
            <Posts posts={posts} setPosts={setPosts} user={user} token={token} featuredPost={featuredPost} setFeaturedPost={setFeaturedPost}/>
        </Route>
        <Route path="/account">
            <Account user={user} token={token} setUser={setUser} setToken={setToken}/>
</Route> 
        
        <Route path="/logout"><div>logout</div></Route>

    </main>
}

export default App;