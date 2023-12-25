import React from 'react'
import logo from '../Assets/logo.png';
import {Link,NavLink,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
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
  const handlePostJobClick = () => {
    const employerEmail = localStorage.getItem('employerEmail');

    if (employerEmail) {
      navigate('/postjob');
    } else {
      window.alert("Please login as employer to post a job.");
    }
  };
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
        <button onClick={handlePostJobClick}>Post A Job</button>
      </div>
    </div>
  )
}

export default Navbar