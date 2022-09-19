import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  it('Se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const h2 = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(h2).toBeInTheDocument();
  });

  it('Se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(<About />);
    const p = screen.getAllByText(/Pokémons/i);
    expect(p).toHaveLength(2);
  });

  it('Se a página contém a imagem de uma Pokédex', () => {
    render(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByAltText('Pokédex');
    expect(img.src).toContain(url);
  });
});
