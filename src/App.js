import React from 'react';
import './App.css';
import './assets/theme/index.css';
import Routes from './router';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
