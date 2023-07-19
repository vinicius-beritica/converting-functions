import { uniqBy } from '../src/uniqBy';

describe('uniqBy', () => {
  it('deve criar uniqBys dos arrays informados.', () => {
    const collection = [
      { a: 1, b: 2 },
      { a: 1, b: 1 },
      { a: 2, b: 2 },
    ];
    const expected = [
      { a: 1, b: 2 },
      { a: 2, b: 2 },
    ];
    expect(uniqBy(collection, 'a')).toEqual(expected);
  });
});
