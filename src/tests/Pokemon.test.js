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
    const typePokemon = screen.getByTestId('pokemon-type');
    const pesoPokemon = screen.getByText(/average weight: 6.0 kg/i);
    const imagPokemon = screen.getByAltText('Pikachu sprite');
    expect(namePokemon).toBeInTheDocument();
    expect(typePokemon).toHaveTextContent('Electric');
    expect(pesoPokemon).toBeInTheDocument();
    expect(imagPokemon).toBeInTheDocument();
    expect(imagPokemon).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
    expect(imagPokemon).toHaveAttribute('alt', 'Pikachu sprite');
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
