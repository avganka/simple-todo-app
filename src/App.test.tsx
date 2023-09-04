import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/Clear completed/i)).toBeInTheDocument();
  });
});
