import React from 'react'

const JobList = () => {
  return (
    <div id='jobList'>
        <div className='jobInfo'>
            <div className='companyImage'>
                <img src='https://s3-symbol-logo.tradingview.com/amazon--600.png' alt='amazon' />
                <p>Amazon</p>
            </div>
            <div className='companyInfo'>
                <p className='jobTitle'>Front End Developer with 1-2 years of experience</p>
                <p className='jobLocation'>Location: Mumbai</p>
                <p className='jobPostedDate'>Posted on:22 december, 2023</p>
                <p className='jobShortDesc'>Job Details:You as a Front-End Developer will be responsible for :1) Develop new user-facing features 2) Build reusable</p>
                <p className='readMore'>Read More</p>
            </div>
        </div>
        <div className='jobInfo'>
            <div className='companyImage'>
                <img src='https://cdn.icon-icons.com/icons2/730/PNG/512/paytm_icon-icons.com_62778.png' alt='paytm' />
                <p>Paytm</p>
            </div>
            <div className='companyInfo'>
                <p className='jobTitle'>Back End Developer with 2.5 years of experience</p>
                <p className='jobLocation'>Location: Noida</p>
                <p className='jobPostedDate'>Posted on:20 december, 2023</p>
                <p className='jobShortDesc'>Job Details:You as a Back-End Developer will be responsible for :1) Handle Backend Api's features 2) Build reusable</p>
                <p className='readMore'>Read More</p>
            </div>
        </div>
    </div>
  )
}

export default JobList