import { pick } from '../src/pick';

describe('pick', () => {
  it('deve transformar os textos em kebab case', () => {
    const record = {
      name: 'Lorem',
      surname: 'Ipsum',
      midname: 'Dolor',
      description: 'sit amet',
    };
    const expected = {
      midname: 'Dolor',
      description: 'sit amet',
    };

    expect(pick(record, 'midname', 'description')).toEqual(expected);
  });
});
