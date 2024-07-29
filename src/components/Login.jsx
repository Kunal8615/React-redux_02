import React, { useState ,useContext} from 'react';
import UserContext from '../Context/UserContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setuser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault(); 
  setuser({username,password})

  
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <h1>Login</h1>
      <input 
        type='text' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='Username' 
      />
      <br />
      <input 
        type='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Password' 
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
