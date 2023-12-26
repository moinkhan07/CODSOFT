import './Styles/Navbar.css';
import './Styles/Welcome.css';
import './Styles/JobSearch.css';
import './Styles/JobList.css';
import './Styles/LogIn.css';
import './Styles/Register.css';
import './Styles/PostJob.css';
import './Styles/JobDetails.css';
import './Styles/UserDashboard.css';
import './Styles/EmployerDashboard.css';
import JobList from './Components/JobList';
import JobSearch from './Components/JobSearch.js';
import Welcome from './Components/Welcome.js';
import Navbar from './Components/Navbar.js';
import LogIn from './Components/LogIn.js';
import Register from './Components/Register.js';
import PostJob from './Components/PostJob.js';
import JobDetails from './Components/JobDetails.js'
import UserDashboard from './Components/UserDashboard.js'
import EmployerDashboard from './Components/EmployerDashboard'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ [ <Navbar />, <Welcome />,<JobSearch/>,<JobList /> ]} />
      <Route path='/login' element={ [ <Navbar />, <LogIn /> ]} />
      <Route path='/register' element={ [ <Navbar />, <Register /> ]} />
      <Route path='/postjob' element={ [ <Navbar />, <PostJob /> ]} />
      <Route path='/detailjob' element={ [ <Navbar />, <JobDetails /> ]} />
      <Route path='/userdashboard' element={ [ <Navbar />, <UserDashboard /> ]} />
      <Route path='/employerdashboard' element={ [ <Navbar />, <EmployerDashboard /> ]} />
     </Routes>
    </div>
  );
}

export default App;
