import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import favoritePokemons from '../pages/FavoritePokemons';

describe('o App Será avaliado 100% pelo Stryker.', () => {
  test('testar renderizado um card com as informações de determinado pokémon:', () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByText(/pikachu/i);
    expect(namePokemon).toBeInTheDocument();
  });
  test('testar se o tipo correto do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toBeInTheDocument();
  });
  test('testar se o peso médio do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);
    const pesoPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    expect(pesoPokemon).toBeInTheDocument();
  });
  test('testar se a imagem do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);
    const imagPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagPokemon).toBeInTheDocument();
  });
  test('testar se o card do pokémon contem link de detalhes.', () => {
    const { history } = renderWithRouter(<App />);
    const linkPokemon = screen.getByRole('link', { name: /more details/i });
    expect(linkPokemon).toBeInTheDocument();
    userEvent.click(linkPokemon);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
  test('testar se existe ícone de estrela nos pokemons favoritos.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/more details/i));
    userEvent.click(screen.getByRole('checkbox'));
    const starPokemon = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(starPokemon).toHaveProperty('src', 'http://localhost/star-icon.svg');
  });
});
