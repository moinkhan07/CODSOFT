import React,{useState} from 'react'
import DashboardComponent from './DashboardComponent';
import ApplicationComponent from './ApplicationComponent';
import SearchJobComponent from './SearchJobComponent'; 
import MessageComponent from './MessageComponent'; 
import SettingComponent from './SettingComponent';
import HelpSupportComponent from './HelpSupportComponent';

import dashboard from '../Assets/home.png';
import application from '../Assets/application.png';
import searchjob from '../Assets/searchjob.png';
import message from '../Assets/message.png';
import setting from '../Assets/setting.png';
import help from '../Assets/help.png';
import logout from '../Assets/logout.png';

const UserDashboard = () => {
const [activeTab, setActiveTab] = useState('Dashboard');

const handleTabClick = (tab) => {
  setActiveTab(tab);
};

const renderTabContent = () => {
  switch (activeTab) {
    case 'Dashboard':
      return <DashboardComponent />;
    case 'Application':
      return <ApplicationComponent />;
    case 'Search Job':
      return <SearchJobComponent />;
    case 'Message':
      return <MessageComponent />;
    case 'Setting':
      return <SettingComponent />;
    case 'Help Support':
      return <HelpSupportComponent />;
    default:
      return null;
  }
};

return (
  <div id='userDashboard'>
    <div id='userSidebar'>
      <ul>
        <li onClick={() => handleTabClick('Dashboard')}>
          <img src={dashboard} alt='icon' />
          <p>Dashboard</p>
        </li>
        <li onClick={() => handleTabClick('Application')}>
          <img src={application} alt='icon' />
          <p>Application</p>
        </li>
        <li onClick={() => handleTabClick('Search Job')}>
          <img src={searchjob} alt='icon' />
          <p>Search Job</p>
        </li>
        <li onClick={() => handleTabClick('Message')}>
          <img src={message} alt='icon' />
          <p>Message</p>
        </li>
        <li onClick={() => handleTabClick('Setting')}>
          <img src={setting} alt='icon' />
          <p>Setting</p>
        </li>
        <li onClick={() => handleTabClick('Help Support')}>
          <img src={help} alt='icon' />
          <p>Help Support</p>
        </li>
        <li>
          <img src={logout} alt='icon' />
          <p>Logout</p>
        </li>
      </ul>
    </div>
    <div id='userProfileData'>{renderTabContent()}</div>
  </div>
);
};


export default UserDashboard