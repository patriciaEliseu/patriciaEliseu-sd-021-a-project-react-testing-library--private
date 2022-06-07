import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('testar se existe um link Home na pagina inicial', () => {
  render(<App />);
  const linkHome = screen.toBeInTheDocument();
  expect(linkHome).toHaveValue('Home');
});
