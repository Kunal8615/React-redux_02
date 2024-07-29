import React, { useState } from 'react'

function Login() {
const [username,setuser] = useState("")
const [password,setpassword] = useState("")


const hangleSubmit = (e)=>{

}

  return (
    <div>
      <h1> Login</h1>
      <input type='text' value={username} onChange={(e)=>setuser(e.target.value)}  placeholder='username'>{" "} </input>
      <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='password'>{" "}</input>

      <button onClick={hangleSubmit}> Submit </button>
    </div>
  )
}

export default Login

