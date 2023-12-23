import React from 'react'
import logo from '../Assets/logo.png';
import {Link,NavLink,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navStyleLink = ()=>{
    return{
      cursor: "pointer",
      textDecoration: "none",
      color:"white"
    }
  }
  const pendingAlert = ()=>{
    window.alert("Pending...");
  }
  return (
    <div id='navbar'>
      <div className="left">
        <div>
        <Link to={'/'}><img src={logo} alt='logo'/></Link>
        </div>
        <div>
        <h2>Job Board</h2>
        <p>Find your dream job</p>
        </div>
      </div>
      <div className="middle">
      <NavLink to={'/'} style={navStyleLink}><p>Home</p></NavLink>
        <p onClick={pendingAlert}>Browse Job</p>
        <p onClick={pendingAlert}>Pages</p>
        <p onClick={pendingAlert}>Blog</p>
        <p onClick={pendingAlert}>Contact</p>
      </div>
      <div className="right">
        <NavLink to={'/login'} style={navStyleLink}><p>Log in</p></NavLink>
        <NavLink to={'/postjob'}><button>Post A Job</button></NavLink>
      </div>
    </div>
  )
}

export default Navbar