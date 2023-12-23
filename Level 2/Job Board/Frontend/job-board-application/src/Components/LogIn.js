import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const LogIn = () => {
  const navStyleLink = ()=>{
    return{
      marginTop: "20px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color:"black"
    }
  }
  return (
    <div id="loginDiv">
    <Link to={'/'}><img src={require('../Assets/logo.png')} /></Link>
    <h2>Welcome To Job Board</h2>
    <input  name="userEmail" placeholder="Enter Email" type={"email"}/>
    <input  name="userPassword"  placeholder="Enter Password" type={"password"}/>
    <button>Log In</button>
    <hr/>
    <NavLink to={'/register'} style={navStyleLink}><p id="newUser">New User? Sign Up</p></NavLink>
    </div>

  )
}

export default LogIn