import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  if (!cohort) {
    return <div>No cohort data</div>;
  }

  return (
    <div>
      <h3>{cohort.cohortCode}</h3>
      <p><strong>Name:</strong> {cohort.name}</p>
      <p><strong>Status:</strong> {cohort.status}</p>
    </div>
  );
}

export default CohortDetails;

