import { intersection } from '../src/intersection';

describe('intersection', () => {
  it('deve criar intersections dos arrays informados.', () => {
    const left = [1, 2, 3, 4, 5, 5, 5, 5];
    const right = [3, 4, 5, 5, 5, 6];
    const expected = [3, 4, 5];

    expect(intersection(left, right)).toEqual(expected);
    expect(left).toEqual([1, 2, 3, 4, 5, 5, 5, 5]);
    expect(right).toEqual([3, 4, 5, 5, 5, 6]);
  });
});
