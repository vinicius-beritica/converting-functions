import { toPairs } from '../src/toPairs';

describe('toPairs', () => {
  it('deve criar um objeto a partir de pares de valores', () => {
    const object = {
      name: 'Edgar Allan Poe',
      age: 40,
      alive: false,
    };
    const expected = [
      ['name', 'Edgar Allan Poe'],
      ['age', 40],
      ['alive', false],
    ];
    expect(toPairs(object)).toEqual(expected);
  });
});
