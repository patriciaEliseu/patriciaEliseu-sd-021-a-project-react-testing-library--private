import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import Pokemons from '../data';

describe('o FavoritePokemons Será avaliado 100% pelo Stryker.', () => {
  test('testar se existe um link Home na pagina inicial', () => {
    renderWithRouter(<FavoritePokemons />);
    const mensExebida = screen.getByText(/no favorite pokemon found/i);
    expect(mensExebida).toBeInTheDocument();
  });
  test('testar se existe um link Home na pagina inicial', () => {
    renderWithRouter(<FavoritePokemons pokemons={ Pokemons } />);
    const cardValid1 = screen.getByText(/pikachu/i);
    expect(cardValid1).toBeInTheDocument();
    const cardValid2 = screen.getByText(/ekans/i);
    expect(cardValid2).toBeInTheDocument();
    // fazer teste se todos os Pokemons favoritos estão aparecendo
    // na lista de favoritos.
    // const listaFavCards = screen
    //   .expect(listaFavCards).toBeInTheDocument();
  });
});
