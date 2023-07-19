import { chunk } from '../src/chunk';

describe('chunk', () => {
  it('deve criar chunks dos arrays informados.', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(chunk(items, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
    expect(chunk(items, 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(items).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
