// __tests__/functions/counterLogic.test.ts
import { increment, decrement } from '../../functions/counterLogic';

describe('counterLogic', () => {
    it('incrementa el contador en 1', () => {
        expect(increment(0)).toBe(1);
    });

    it('decrementa el contador en 1', () => {
        expect(decrement(1)).toBe(0);
    });
});