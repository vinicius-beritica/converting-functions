import { uniq } from '../src/uniq';

describe('uniq', () => {
  it('deve criar uniqs dos arrays informados.', () => {
    const arr1 = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];
    expect(uniq(arr1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });
});
