import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para las aserciones de jest-dom
import Like from '../like'; 

test('El componente muestra "Likes: 0" por defecto', () => {
    render(<Like />);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
});

test('Cuando se haga click en el boton, el numero de likes aumenta en 1', () => {
    render(<Like />);
    const likeButton = screen.getByText('Like');
    const likesParagraph = screen.getByText('Likes: 0');
    fireEvent.click(likeButton);
    expect(likesParagraph).toHaveTextContent('Likes: 1');
});

test('Cuando se haga click en el boton, el numero de likes disminuye en 1', () => {
    render(<Like />);
    const dislikeButton = screen.getByText('Dislike');
    const likesParagraph = screen.getByText('Likes: 0');
    fireEvent.click(dislikeButton);
    expect(likesParagraph).toHaveTextContent('Likes: -1');
});

