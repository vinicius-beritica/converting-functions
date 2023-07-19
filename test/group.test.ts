import { group } from '../src/group';

describe('group', () => {
  it('deve criar um objeto a partir de pares de valores', () => {
    const collection = [
      { name: 'Edgar Allan Poe', country: 'USA' },
      { name: 'H. P. Lovecraft', country: 'USA' },
      { name: 'Mary Shelley', country: 'England' },
    ];

    const expectation = {
      USA: [
        { name: 'Edgar Allan Poe', country: 'USA' },
        { name: 'H. P. Lovecraft', country: 'USA' },
      ],
      England: [{ name: 'Mary Shelley', country: 'England' }],
    };
    expect(group(collection, 'country')).toEqual(expectation);
  });
});
