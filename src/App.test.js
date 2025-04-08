import './App.css';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Nafiyad heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Nafiyad/i);
  expect(headingElement).toBeInTheDocument();
});