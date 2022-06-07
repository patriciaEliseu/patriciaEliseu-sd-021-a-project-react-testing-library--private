/* eslint-disable func-call-spacing */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('o About Será avaliado 100% pelo Stryker.', () => {
  test('testar se a pagina contém um heding h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const headingH2 = screen.getByRole('heading', { name: /about pokédex/i });
    expect(headingH2).toBeInTheDocument();
  });
  test('testar se a pagina contem dois paragrafos', () => {
    renderWithRouter(<About />);
    const paragrafo1 = screen.getByText(/this application simulates a pokédex, /i);
    expect(paragrafo1).toBeInTheDocument();
    const paragrafo2 = screen.getByText(/one can filter pokémons by type, /i);
    expect(paragrafo2).toBeInTheDocument();
  });
  test('testar se a pagina contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const imagemP = screen.getByRole('img', { name: /pokédex/i });
    // expect(imagemP).to('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(imagemP).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
