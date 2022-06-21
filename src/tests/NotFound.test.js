import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('o App Será avaliado 100% pelo Stryker.', () => {
  test('testar se a pagina contem um heading h2 '
     + 'com o texto Page requested not found', () => {
    render(<NotFound />);
    const verifHend = screen.getByRole('heading',
      { name: /Page requested not found/i });
    expect(verifHend).toBeInTheDocument();
  });
  test('testa se a pg mostra a imagem', () => {
    render(<NotFound />);
    const verifImag = screen.getByRole('img',
      { name: /pikachu crying because the page requested was not found/i });
    expect(verifImag).toBeInTheDocument();
    expect(verifImag.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
