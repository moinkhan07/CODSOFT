import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Register = () => {
  const navStyleLink = () => {
    return {
      marginTop: "20px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color:"black"
    };
  };
  return (
    <>
      <div id="signupDiv">
        <h2>Welcome To Job Board</h2>
        <input  name="firstName"  placeholder="Enter FirstName" type={"text"}/>
        <input  name="lastName"  placeholder="Enter LastName" type={"text"}/>
        <input  name="userEmail" placeholder="Enter Email" type={"email"}/>
        <input  name="userPassword" placeholder="Enter Password" type={"password"} />
        <button>Register</button>
        <hr/>
        <NavLink to={'/login'} style={navStyleLink}><p id="already">Already have an account? Log In</p></NavLink>
      </div>
    </>
  )
}

export default Register