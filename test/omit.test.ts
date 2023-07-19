import { omit } from '../src/omit';

describe('omit', () => {
  it('deve transformar os textos em kebab case', () => {
    const record = {
      name: 'Lorem',
      surname: 'Ipsum',
      midname: 'Dolor',
      description: 'sit amet',
    };
    const expected = {
      name: 'Lorem',
      surname: 'Ipsum',
    };

    expect(omit(record, 'midname', 'description')).toEqual(expected);
  });
});
