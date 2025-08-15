import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // Mock alert before all tests
  window.alert = jest.fn();
});

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders counter starting value', () => {
  render(<App />);
  expect(screen.getByText('5')).toBeInTheDocument();
});

test('increments counter and shows Hello Member alert', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Increment/i));
  expect(window.alert).toHaveBeenCalledWith('Hello Member 6');
});

test('currency conversion alert appears', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Amount:/i), { target: { value: '80' } });
  fireEvent.change(screen.getByLabelText(/Currency:/i), { target: { value: 'Euro' } });
  fireEvent.click(screen.getByText(/Submit/i));

  expect(window.alert).toHaveBeenCalledWith(expect.stringMatching(/Converting to Euro Amount is/));
});
