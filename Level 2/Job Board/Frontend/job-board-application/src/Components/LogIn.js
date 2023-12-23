import React from 'react'
import {NavLink} from 'react-router-dom';

const LogIn = () => {
  return (
    // <div id="loginDiv">
    // <Link to={'/'}><img src={require('../Assets/logo.jpg')} /></Link>
    // <h2>Welcome To Movie Venture</h2>
    // <input value={credentials.userEmail} onChange={handleChange} name="userEmail" placeholder="Enter Email" type={"email"}/>
    // <input value={credentials.userPassword} onChange={handleChange} name="userPassword"  placeholder="Enter Password" type={"password"}/>
    // <button onClick={loginUser}>Log In</button>
    // <hr/>
    // <NavLink to={'/signup'} style={navStyleLink}><p id="newUser">New User? Sign Up</p></NavLink>
    // </div>
    <div>
      <h1>LogIn</h1>
     <NavLink to={'/register'}><p>Register</p></NavLink>
    </div>

  )
}

export default LogIn