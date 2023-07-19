import { invert } from '../src/invert';

describe('invert', () => {
  it('Deve inverter as posições entre chaves e valores do objeto', () => {
    expect(invert({ a: 1, b: 2, c: 1 })).toEqual({ '1': 'c', '2': 'b' });
  });
});
