import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Prabha";
  const school = "ABC High School";
  const total = 504;
  const goal = 600;

  const average = (total / goal) * 100;

  return (
    <div className="score-card">
      <h2>Student Score Report</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
