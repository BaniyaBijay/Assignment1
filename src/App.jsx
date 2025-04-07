import { useState, useEffect } from 'react';
import Nav from './Nav';
import Scp from './Scp';
import './App.css';

function App() {
  const [scps, setScps] = useState([]);
  const [selectedScp, setSelectedScp] = useState(null);

  useEffect(() => {
    // Fetch SCP data from the server or local file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setScps(data);  // Set SCP data to state
      })
      .catch((error) => {
        console.error('Error loading data:', error); // Improved error logging
      });
  }, []);

  return (
    <div className="container">
      <h1>SCP Subjects</h1>
      <div className="content">
        <Nav scps={scps} onScpSelect={setSelectedScp} />
        <div className="scp-container">
          {selectedScp ? (
            <Scp scp={selectedScp} />
          ) : (
            <p>
              The SCP Foundation is a fictional organization featured in stories created by contributors on the SCP Wiki, a wiki-based collaborative writing project. Within the project's shared fictional universe, the SCP Foundation is a secret organization that is responsible for capturing, containing, and studying various paranormal, supernatural, and other mysterious phenomena, while also keeping their existence hidden from the rest of society.
              <br />
              Select an SCP file to view the details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
