import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.js', () => {
  test('renders learn testing and dev link', () => {
    render(<App />);
    const linkElement = screen.getByTestId(/learn-link/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('correct url', () => {
    render(<App />);
    const linkElement = screen.getByTestId(/learn-link/i);
    expect(linkElement.href).toMatch('www.demo.com');
  });
});
