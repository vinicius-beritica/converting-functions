import { union } from '../src/union';

describe('union', () => {
  it('deve criar unions dos arrays informados.', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7, 8, 9];
    const arr3 = [0, 1, 2, 3, 4, 5, 6];

    expect(union(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });
});
