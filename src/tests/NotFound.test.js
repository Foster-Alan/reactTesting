import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Test NotFound', () => {
  it('A página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);

    const notFound = screen
      .getByRole('heading', { level: 2 });
    expect(notFound).toHaveTextContent('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });

  it('Se renderiza a imagem', () => {
    render(<NotFound />);

    const img = screen
      .getByRole(
        'img',
        { name: 'Pikachu crying because the page requested was not found' },
      );
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
