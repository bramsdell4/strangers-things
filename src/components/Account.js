import React, { useState } from "react";
const apiCall = 'https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/'

const Account = ({user, setUser, token}) => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async(username, password) => {


  



        const registration = await apiCall("/guests/register", "POST", null, {
          guest: {username, password}
        })
      
        return {
          user: registration.data.guest, 
          token: registration.data.token
        };
      }

      const loginUser = async(username, password) => {
        const login = await apiCall("/guests/login", "POST", null, {
          guest: {username, password}
        })
      
        return {
          user: login.data.guest, 
          token: login.data.token
        };
      }

      const setToken = (body, token) => {
        return token ?
        Object.assign(
          body, {headers: Object.assign(body.headers, {'Authorization': `Bearer ${token}` })}
        ) :
        body
      }

  
    
    fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: {username},//whatever the input for username is
      password: {password}//whatever the input for password is
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
    return <div>
        <h1>Account register and Log In</h1>
        <form>
            <input onChange={(e) => setUsername(e.target.value)}
            required name="username" type='text' placeholder="username" value={username}></input>
        </form>
        </div>
    
}
export default Account