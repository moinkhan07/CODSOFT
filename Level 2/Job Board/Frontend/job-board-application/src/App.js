import './Styles/Navbar.css';
import './Styles/Welcome.css';
import './Styles/JobSearch.css';
import './Styles/JobList.css';
import JobList from './Components/JobList';
import JobSearch from './Components/JobSearch.js';
import Welcome from './Components/Welcome.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Welcome />
     <JobSearch />
     <JobList />
    </div>
  );
}

export default App;
