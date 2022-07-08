import React , {useState} from "react";
import { NavLink, Route} from "react-router-dom";

const App = () => {
    const [posts, setPosts] = useState([])
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
        <NavLink to="/login" className="navlink" activeClassName="active">
            Login
            </NavLink>
        <NavLink to="/register" className="navlink" activeClassName="active">
            Register
            </NavLink>
        </nav>
        <Route exact path="/"><div>hello</div></Route>
        <Route path="/posts"><div>posts</div></Route>
        <Route path="/login"><div>Login</div></Route>
        <Route path="/register"><div>register</div></Route>
        <Route path="/logout"><div>logout</div></Route>

    </main>
}

export default App;