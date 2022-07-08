import React from 'react';
import { screen } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import favoritePokemons from '../pages/FavoritePokemons';

describe('o App Será avaliado 100% pelo Stryker.', () => {
  test('testar informações detalhadas do pokemon selecionado aparece na tela.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    const dPokemon = screen.getByRole('heading', { name: /pikachu details/i });
    expect(dPokemon).toBeInTheDocument();
  });
  test('testar se Não existi link para os detalhes do pokemon selecionado.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    expect(detailsPokemon).not.toBeInTheDocument();
  });
  test('testar se seção de detalhes contem heading h2 com texto summary.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    const summaryPokemon = screen.getByRole('heading', { name: /summary/i, leve: 2 });
    expect(summaryPokemon).toBeInTheDocument();
  });
  test('testar se seção de detalhes contem p com o resumo do pokemon.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    const paragPokemon = screen
      .getByText(/this intelligent pokémon roasts hard berries./i);
    expect(paragPokemon).toBeInTheDocument();
  });
  test('testar seção de detalhes h2 com o "Game Locations of name" do pokemon.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    const headingPokemon = screen
      .getByRole('heading', { name: /game locations of pikachu/i, level: 2 });
    expect(headingPokemon).toBeInTheDocument();
  });
  test('testar se as localizações aparecem na seção de detalhes.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    const localPokemon1 = screen.getByText(/kanto viridian forest/i);
    const localPokemon2 = screen.getByText(/kanto power plant/i);
    expect(localPokemon1).toBeInTheDocument();
    expect(localPokemon2).toBeInTheDocument();
  });
  test('testar se os mapas do local aparecem na seção de detalhes.', () => {
    renderWithRouter(<App />);
    const detailsPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPokemon);
    const imageLocation1 = screen
      .getAllByAltText(/Pikachu location/i);
    // container.querySelector('#root > div > section > section:nth-child(4)')
    // const imageLocation2 = screen
    //   .getByAltText(/Pikachu location/i);
    expect(imageLocation1[0]).toHaveAttribute('src', 'https://pwo-wiki.info/images/4/47/Viridian_Forest.gif');
    expect(imageLocation1[1]).toHaveAttribute('src', 'https://pwo-wiki.info/images/5/5b/Pp.gif');
    screen.getByText(/favoritado/i);
  });
});
