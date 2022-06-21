import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
// import Pokedex from '../pages/Pokedex';
import App from '../App';

describe('o App Será avaliado 100% pelo Stryker.', () => {
  test('testar se a pagina contem um heading h2 '
     + 'com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const verifHend = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(verifHend).toBeInTheDocument();
  });
  test('testar se é exibido o próximo pokemon qdo o botão '
    + 'Próximo pokemon é clicado', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    const verifProx = screen.getByRole('img', { name: /charmander sprite/i });
    expect(verifProx).toBeInTheDocument();
  });
  test('testar se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const contImag = screen.getByRole('img', { name: /pikachu/i });
    expect(contImag).toBeInTheDocument();
  });
  test('testar se a Pokédex tem os botões do filtro:', () => {
    renderWithRouter(<App />);
    const verifFiltro = screen.getByRole('button', { name: /all/i });
    const verifElectre = screen.getByRole('button', { name: /electric/i });
    userEvent.click(verifElectre);
    const botaoNext = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(botaoNext).toBeDisabled();
    expect(verifFiltro).toBeInTheDocument();
    userEvent.click(verifFiltro);
    expect(botaoNext).not.toBeDisabled();
    screen.getAllByTestId('pokemon-type-button');
  });
  test('testar se a Pokédex contém um botão para resetar o filtro:', () => {

  });
});
