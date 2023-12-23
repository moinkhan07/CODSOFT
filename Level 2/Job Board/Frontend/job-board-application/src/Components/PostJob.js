import React from 'react'

const PostJob = () => {
  return (
    <div id='postJobMainDiv'>
      <div id='employerLogin'>
        <h2>Welcome To Job Board</h2>
        <input  name="employerEmail" placeholder="Enter Email" type={"email"}/>
        <input  name="employerPassword"  placeholder="Enter Password" type={"password"}/>
        <p>Forgot password?</p>
        <button>Log In</button>
      </div>
      {/* ================================================================== */}
      <div id='addJob'></div>
    </div>
  )
}

export default PostJob