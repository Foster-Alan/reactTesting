import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test Pokedex', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const electricButton = screen.getByRole('button', { name: /Electric/i });
    expect(electricButton).toBeInTheDocument();
    userEvent.click(electricButton);
  });

  test('Os botões de filtragem por tipo possuem o data-testid correto', () => {
    renderWithRouter(<App />);

    const filterButtons = screen.getAllByTestId('pokemon-type-button');
    const pokemonTypes = 7;
    expect(filterButtons).toHaveLength(pokemonTypes);
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const all = screen.getByRole('button', { name: 'All' });
    expect(all).toBeInTheDocument();

    userEvent.click(all);
  });
});
