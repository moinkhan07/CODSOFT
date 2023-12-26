import React,{ useState } from 'react';
import logo from '../Assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
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
  const handleEmailClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleProfileClick = () => {
    const userEmail = localStorage.getItem('userEmail');
    const employerEmail = localStorage.getItem('employerEmail');

    if (userEmail) {
      navigate('/userdashboard');
    } else if (employerEmail) {
      navigate('/employerdashboard');
    }
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('employerEmail');
    setDropdownVisible(false);
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
        {/* <NavLink to={'/login'} style={navStyleLink}><p>Log in</p></NavLink> */}
        {localStorage.getItem('userEmail') || localStorage.getItem('employerEmail') ? (
          <>
            <div id='afterLoggedIn'
              style={{ position: 'relative', cursor: 'pointer' }}
              onClick={handleEmailClick}
            >
              <p style={{ border: '1px solid #ccc',fontSize:'17px',fontWeight:'600' ,padding: '10px 12px', borderRadius: '4px' }} >
                {localStorage.getItem('userEmail') || localStorage.getItem('employerEmail')}
              </p>
              {dropdownVisible && (
                <div s style={{
                  width:'105px',
                  position: 'absolute',
                  top: '100%',
                  right: 14,
                  zIndex: 1,
                  textAlign:'center',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}>
                  <p style={{ fontSize:'17px',width:'100%',height:'35px',display:'flex',alignItems:'center',justifyContent:'center',borderBottom:'1px solid white' }}  onClick={handleProfileClick}>
                    Profile
                  </p>
                  <p style={{color:'red', fontSize:'17px',width:'100%',height:'35px',display:'flex',alignItems:'center',justifyContent:'center' }}  onClick={handleLogoutClick}>
                    Logout
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <NavLink to={'/login'} style={navStyleLink}>
            <p>Log in</p>
          </NavLink>
        )}
        <button onClick={handlePostJobClick}>Post A Job</button>
      </div>
    </div>
  )
}

export default Navbar