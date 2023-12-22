import './Styles/Navbar.css';
import './Styles/Welcome.css';
import './Styles/JobSearch.css';
import JobSearch from './Components/JobSearch.js';
import Welcome from './Components/Welcome.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Welcome />
     <JobSearch />
    </div>
  );
}

export default App;
