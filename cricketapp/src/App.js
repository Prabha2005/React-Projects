import logo from './logo.svg';
import './App.css';
// src/App.js
import React from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App(){
  const flag = true; // toggle true/false to switch view
  return (
    <div className="App">
      <h1>CricketApp — demo</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
      {/* To show both: remove condition and render both components */}
    </div>
  );
}
export default App;
