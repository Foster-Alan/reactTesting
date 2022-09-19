import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('Teste Pokemon', () => {
  const idPokemonName = 'pokemon-name';

  test('imagem do pokemon é mostrado corretamente', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId(idPokemonName).textContent;

    const objPokemon = pokemons.find((param) => param.name === pokemonName);

    const imgPokemon = screen.getByRole('img', { name: `${pokemonName} sprite` });
    expect(imgPokemon).toHaveAttribute('src', `${objPokemon.image}`);
  });

  test('imagem do pokemon possui o alt correto', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId(idPokemonName).textContent;
    const imgPokemon = screen.getByRole('img', { name: `${pokemonName} sprite` });
    expect(imgPokemon).toBeInTheDocument();
  });

  test('Pokemon está favoritado corretamente', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const favoriteChackbox = screen.getByRole('checkbox');
    userEvent.click(favoriteChackbox);

    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);

    const pokemonName = screen.getByTestId(idPokemonName).textContent;
    const markedFavorite = screen.getByRole(
      'img',
      { name: `${pokemonName} is marked as favorite` },
    );
    expect(markedFavorite).toBeInTheDocument();

    const markedFavorite2 = screen.getByRole(
      'img',
      { name: `${pokemonName} is marked as favorite` },
    );
    expect(markedFavorite2).toHaveAttribute('src', '/star-icon.svg');
  });

  test('Tipo do pokemon é mostrado', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId(idPokemonName).textContent;

    const objPokemon = pokemons.find((param) => param.name === pokemonName);

    const pokemonType = screen.getByTestId('pokemon-type').textContent;
    expect(pokemonType).toBe(objPokemon.type);
  });
});
