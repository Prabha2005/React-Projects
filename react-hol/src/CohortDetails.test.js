import React from 'react';
import { render, screen } from '@testing-library/react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
  test('renders without crashing', () => {
    render(<CohortDetails />);
    expect(screen.getByText(/No Cohort Selected/i)).toBeInTheDocument();
  });

  test('renders cohort data', () => {
    const sample = CohortData[0];
    render(<CohortDetails cohort={sample} />);
    expect(screen.getByText(sample.code)).toBeInTheDocument();
    expect(screen.getByText(sample.name)).toBeInTheDocument();
    expect(screen.getByText(`Members: ${sample.members}`)).toBeInTheDocument();
  });
});
