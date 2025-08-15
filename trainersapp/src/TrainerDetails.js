/*import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.TrainerId.toString() === id);

  if (!trainer) return <h3>Trainer not found</h3>;

  return (
    <div>
      <h2>Trainer Details</h2>
      <p><strong>Name:</strong> {trainer.Name}</p>
      <p><strong>Email:</strong> {trainer.Email}</p>
      <p><strong>Phone:</strong> {trainer.Phone}</p>
      <p><strong>Technology:</strong> {trainer.Technology}</p>
      <p><strong>Skills:</strong> {trainer.Skills}</p>
    </div>
  );
}

export default TrainerDetails;
*/
import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.TrainerId.toString() === id);

  if (!trainer) return <h3>Trainer not found</h3>;

  const skillList = trainer.Skills.split(',').map(skill => skill.trim());

  return (
    <div>
      <h3>Trainers Details</h3>
      <p><strong>{trainer.Name}</strong></p>
      <p>{trainer.Email}</p>
      <p>{trainer.Phone}</p>
      <ul>
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetails;
