import React from 'react';
import { screen, render } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste se são exibidos todos os cards de pokémons favoritados', () => {
  it('Teste se é exibida a mensagem No favorite pokemon found', () => {
    render(<FavoritePokemons />);

    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
});
