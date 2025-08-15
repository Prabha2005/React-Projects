import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import Getuser from './components/Getuser';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: 20 }}>Random User</h1>
      <Getuser />
    </div>
  );
}

export default App;
