import React from 'react'

const JobDetails = () => {
  return (
    <div id='jobDetailsMain'>
        <div id='jobDetails'>
            <div className='jobDetailUpper'>
                {/* <p>Full Stack Web Developer</p> */}
                <p>Front End Developer with 1-2 years of experience</p>
                <p>at Amazon</p>
                <button>Apply For This Job</button>
            </div>
            <div className='jobDetailBottom'>
                <p>About this role</p>
                <div className='aboutJob'>
                    <div className='aboutJobImg'>
                    <img src='https://s3-symbol-logo.tradingview.com/amazon--600.png' alt='amazon' />
                    </div>
                    <div className='aboutJobInfo'>
                        <p><b>Full Stack Web Developer</b> (Full Time)</p>
                        <p className='companyNameAddress'>Amazon - Noida, India</p>
                        <p className='salaryRange'>12-15 LPA + Benefits</p>
                    </div>
                </div>
                <div className='aboutJobInfo2'>
                    <label>Description:</label>
                    <p>Shape digital experiences at Amazon! Full Stack Web Devs translate ideas into user-centric applications, ensuring seamless online interactions globally.</p>
                    <label>Tech Stacks:</label>
                    <p>Master cutting-edge tech! Amazon's stack: React, Node.js, AWS, DynamoDB. Build robust, scalable web solutions with the latest technologies.</p>
                    <label>Roles and Responsibilities:</label>
                    <p>Drive end-to-end solutions! Develop front-end interfaces, integrate APIs, design scalable back-end systems. Collaborate for a cohesive user experience.</p>
                    <p><b>Job Type:</b> Work From Office</p>
                    <p><b>Notice Period:</b> 1-4 weeks</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobDetails