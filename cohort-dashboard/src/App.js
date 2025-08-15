import logo from './logo.svg';
import './App.css';

import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Bootcamp', status: 'ongoing', startDate: '2025-08-01', endDate: '2025-09-01' },
    { name: 'Java Spring Mastery', status: 'completed', startDate: '2025-06-01', endDate: '2025-07-01' },
    { name: 'Python', status: 'completed', startDate: '2025-04-01', endDate: '2025-06-01' }
  ];

  return (
    <div>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
