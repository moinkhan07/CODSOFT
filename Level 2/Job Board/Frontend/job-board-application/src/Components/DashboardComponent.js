import React from 'react'
import calender from '../Assets/calender.png';
import sent from '../Assets/briefcase.png';
import message from '../Assets/messages.png';
import rejected from '../Assets/rejected.png';

const DashboardComponent = () => {
  return (
    <div id='userDashboardInfo'>
      <div id='userStatistic'>
        <div className='userStats'>
          <div>
            <img src={calender} alt='dashboardlogo' />
          </div>
          <div>
            <p>Interview Schedule</p>
            <p className='countInter'>54</p>
          </div>
        </div>


        <div className='userStats'>
          <div>
            <img src={sent} alt='dashboardlogo' />
          </div>
          <div>
            <p>Application Sent</p>
            <p className='countInter'>75</p>
          </div>
        </div>
        
        
        <div className='userStats'>
          <div>
            <img src={rejected} alt='dashboardlogo' />
          </div>
          <div>
            <p>Application Rejected</p>
            <p className='countInter'>24</p>
          </div>
        </div>
      
      
        <div className='userStats'>
          <div>
            <img src={message} alt='dashboardlogo' />
          </div>
          <div>
            <p>Unread Message</p>
            <p className='countInter'>110</p>
          </div>
        </div>

      </div>

      <div id='userProfileInfo'>
        
      </div>
    </div>
  )
}

export default DashboardComponent