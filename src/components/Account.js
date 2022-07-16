import React, { useState } from "react";



const Account = ({token, setToken}) => {
    const [user, setUser] = useState('')
   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      registerCall(username, password);
      
      //logInCall();
    }

    /*const logInCall = async (username, password) => {
      const login = await fetch('https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
      const data = await login.json();
      console.log(data)
      return data
    }
    */
    const registerCall = async (username, password) => {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const data = await response.json();
     console.log('data?', data);
     console.log(data.data.token);
     setToken(data.data.token);
     const regToken = data.data.token
     return regToken;
     
     
    }

  
    return <>
    {
      (user && token) ?
      <> 
      <h1> User Profile</h1>
      <p>Hello {user.username}, you are logged in!</p>
</>:
    <>
    <div>
        <h1>Account register and Log In</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setUsername(e.target.value)}
            required name="username" type='text' placeholder="username" value={username}></input>
            <input onChange={(e) => setPassword(e.target.value)}
            required name="password" type='password' placeholder="password" value={password}></input>
            <button type="submit">Submit</button>
        </form>
        </div>
        </>
    }
        </>  
}
export default Account