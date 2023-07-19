import { compact } from '../src/compact';

describe('compact', () => {
  it('deve criar compacts dos arrays informados.', () => {
    const items = [0, 1, false, 2, '', 3, null, undefined, '0'];
    const original = [...items];
    const expected = [1, 2, 3, '0'];

    expect(compact(items)).toEqual(expected);
    expect(items).toEqual(original);
  });
});
