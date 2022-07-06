import React , {useState} from "react";
import {Route} from "react-router-dom";

const App = () => {
    const [posts, setPosts] = useState([])
    const [token, setToken] = useState('')


    return <main>
        <Route exact path="/"><div>hello</div></Route>
        <Route path="/posts"><div>posts</div></Route>
        <Route path="/login"><div>Login</div></Route>
        <Route path="/register"><div>register</div></Route>
        <Route path="/logout"><div>logout</div></Route>

    </main>
}

export default App;