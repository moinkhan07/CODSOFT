import React from 'react'

const PostJob = () => {
  return (
      <div id='addJob'>
        <div id='addJobForm'>
          <h1>Add Job</h1>
          <hr/>
          <input placeholder='Enter Company Logo Url' type={"text"} />
          <input placeholder='Enter Company Name' type={"text"} />
          <input placeholder='Enter Job Title' type={"text"} />
          <input placeholder='Enter Job Location' type={"text"} />
          <input placeholder='Enter Job CreatedOn' type={"text"} />
          <input placeholder='Enter Job Description' type={"text"} />
          <input placeholder='Enter Job Tech Stacks' type={"text"} />
          <input placeholder='Enter Job Roles And Reponsibilities' type={"text"} />
          <input placeholder='Enter Job Type' type={"text"} />
          <input placeholder='Enter Job Notice Period' type={"text"} />
          <input placeholder='Enter Job Salary Range' type={"text"} />
          <button>Add Job</button>
        </div>
      </div>
  )
}

export default PostJob