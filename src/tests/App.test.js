import { render, screen } from '@testing-library/react';
import App from '../components/Layout';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/teste/i);
  expect(linkElement).toBeInTheDocument();
});
