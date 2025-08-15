import React from 'react';
import ComplaintRegister from './components/ComplaintRegister';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h2 style={{
        color: 'red',
        marginTop: '250px',   // space from top
        marginBottom: '40px', // space before form
        textAlign: 'center'
      }}>
        Register your complaints here!!!
      </h2>
      <ComplaintRegister />
    </div>
  );
}

export default App;
