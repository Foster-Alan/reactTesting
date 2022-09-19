import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste PokemonDetails />', () => {
  it('Informações detalhadas funciona corretamente', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const pikachu = screen.getByText(/Pikachu Details/i);
    expect(pikachu).toBeInTheDocument();
    expect(moreDetails).not.toBeInTheDocument();
    const h2 = screen.getByRole('heading', { name: 'Summary' });
    expect(h2).toBeInTheDocument();
    const summaryContent = screen.getAllByText(/electricity/i);
    expect(summaryContent).toHaveLength(1);
  });

  it('Se o Game locations of <name> funciona corretamente', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const mapPokemon = screen.getByText(/Game Locations of Pikachu/i);
    expect(mapPokemon).toBeInTheDocument();

    const pikachuLocation = screen.getAllByAltText('Pikachu location');
    expect(pikachuLocation).toHaveLength(2);

    const url1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    expect(pikachuLocation[0].src).toContain(url1);

    const pikachu = screen
      .getByText(/electricity/i);
    expect(pikachu).toBeInTheDocument();

    const textLocation = screen.getByText(/Kanto Viridian Forest/i);
    expect(textLocation).toBeInTheDocument();
  });

  it('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    renderWithRouter(<App />);

    const moreLink = screen.getByRole('link', { name: 'More details' });
    expect(moreLink).toBeInTheDocument();
    userEvent.click(moreLink);
    const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favorite).toBeInTheDocument();
    userEvent.click(favorite);
  });
});
