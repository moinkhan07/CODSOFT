import React from 'react'
import logo from '../Assets/logo.png';

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="left">
        <div>
        <img src={logo} alt='logo'/>
        </div>
        <div>
        <h2>Job Board</h2>
        <p>Find your dream job</p>
        </div>
      </div>
      <div className="middle">
        <p>Home</p>
        <p>Browse Job</p>
        <p>Pages</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="right">
        <p>Log in</p>
        <button>Post A Job</button>
      </div>
    </div>
  )
}

export default Navbar