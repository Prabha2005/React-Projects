import React from 'react';

export default function CohortDetails({ cohort }) {
  if (!cohort) {
    return <h3>No Cohort Selected</h3>;
  }
  return (
    <div>
      <h3>{cohort.code}</h3>
      <p>{cohort.name}</p>
      <p>Members: {cohort.members}</p>
    </div>
  );
}
