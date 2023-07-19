import { range } from '../src/range';

describe('range', () => {
  it('Deve criar um array numerico', () => {
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(range(5, 10)).toEqual([10, 11, 12, 13, 14]);
    expect(range(5, -5)).toEqual([-5, -4, -3, -2, -1]);
    expect(range(-10)).toEqual([]);
  });
});
