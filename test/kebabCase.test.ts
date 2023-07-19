import { kebabCase } from '../src/kebabCase';

describe('kebabCase', () => {
  it('deve transformar os textos em kebab case', () => {
    const expectation = 'lorem-ipsum';
    const frases = ['lorem_ipsum', 'lorem ipsum', 'lorem-ipsum'];

    frases.forEach(frase => expect(kebabCase(frase)).toEqual(expectation));
  });
});
