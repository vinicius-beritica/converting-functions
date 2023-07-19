import { truncate } from '../src/truncate';

describe('truncate', () => {
  it('Deve retronar o texto truncado', () => {
    expect(truncate('lorem ipsum dolor sit amet', 10)).toEqual('lorem i...');
    expect(truncate('lorem ipsum dolor sit amet', 100)).toEqual(
      'lorem ipsum dolor sit amet',
    );
    expect(truncate('lorem ipsum dolor sit amet', 1)).toEqual('...');
  });
});
