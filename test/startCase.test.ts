import { startCase } from '../src/startCase';

describe('startCase', () => {
  it('deve transformar os textos em camel case', () => {
    const expectation = 'Lorem Ipsum';
    const frases = ['lorem_ipsum', 'lorem ipsum', 'lorem-ipsum'];

    frases.forEach(frase => expect(startCase(frase)).toEqual(expectation));
  });
});
