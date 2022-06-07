import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('o App Será avaliado 100% pelo Stryker.', () => {
  test('testar se existe um link Home na pagina inicial', () => {
    const { history } = renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /home/i }));
    const linkHome = history.location.pathname;
    expect(linkHome).toBe('/');
  });
  test('testar se existe um link About na pagina inicial', () => {
    const { history } = renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /about/i }));
    const linkAbout = history.location.pathname;
    expect(linkAbout).toBe('/about');
  });
  test('testar se existe um link Favorites na pagina inicial', () => {
    const { history } = renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /Favorite Pokémons/i }));
    const linkAbout = history.location.pathname;
    expect(linkAbout).toBe('/favorites');
  });
  test('testar se existe um link NotFound na pagina inicial', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/notfound');
    const liNotFound = history.location.pathname;
    expect(liNotFound).toBe('/notfound');
  });
});
