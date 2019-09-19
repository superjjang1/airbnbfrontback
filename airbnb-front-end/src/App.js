import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container-fluid nav">
        <div className="row">
          <NavBar />
        </div>
      </div>
      <h1>Fact Check</h1>
    </div>

    </Router>
  );
}

export default App;
