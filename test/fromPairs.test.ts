import { fromPairs } from '../src/fromPairs';

describe('fromPairs', () => {
  it('deve criar um objeto a partir de pares de valores', () => {
    expect(
      fromPairs(['name', 'Edgar Allan Poe'], ['age', 40], ['alive', false]),
    ).toEqual({
      name: 'Edgar Allan Poe',
      age: 40,
      alive: false,
    });
  });
});
