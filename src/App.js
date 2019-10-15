import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A test with redux</p>
        <Routes />
      </header>
    </div>
  );
}

export default App;
