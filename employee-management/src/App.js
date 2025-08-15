import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    // Wrap entire JSX in ThemeContext.Provider
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`}>
        <h1>Employee Management</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        {/* No theme prop here */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}
