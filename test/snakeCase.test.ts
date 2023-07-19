import { snakeCase } from '../src/snakeCase';

describe('snakeCase', () => {
  it('deve transformar os textos em snake case', () => {
    const expectation = 'lorem_ipsum';
    const frases = ['lorem_ipsum', 'lorem ipsum', 'lorem-ipsum'];

    frases.forEach(frase => expect(snakeCase(frase)).toEqual(expectation));
  });
});
