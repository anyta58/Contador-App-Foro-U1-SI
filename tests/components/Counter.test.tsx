import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Counter from '../../components/Counter';

describe('Counter Component', () => {
    it('se renderiza correctamente', () => {
        const { getByText } = render(<Counter />);
        expect(getByText('Contador: 0')).toBeTruthy();
    });

    it('incrementa el contador al presionar el botón', () => {
        const { getByText } = render(<Counter />);
        fireEvent.press(getByText('Incrementar'));
        expect(getByText('Contador: 1')).toBeTruthy();
    });

    it('decrementa el contador al presionar el botón', () => {
        const { getByText } = render(<Counter />);
        fireEvent.press(getByText('Decrementar'));
        expect(getByText('Contador: -1')).toBeTruthy();
    });
});