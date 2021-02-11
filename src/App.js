import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
