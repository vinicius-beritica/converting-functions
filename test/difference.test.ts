import { difference } from '../src/difference';

describe('difference', () => {
  it('deve criar differences dos arrays informados.', () => {
    const left = [1, 2, 3];
    const right = [2];
    const expected = [1, 3];

    expect(difference(left, right)).toEqual(expected);
    expect(left).toEqual([1, 2, 3]);
    expect(right).toEqual([2]);
  });
});
