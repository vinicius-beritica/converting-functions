import { pascalCase } from '../src/pascalCase';

describe('pascalCase', () => {
  it('deve transformar os textos em pascal case', () => {
    const expectation = 'LoremIpsum';
    const frases = ['lorem_ipsum', 'lorem ipsum', 'lorem-ipsum'];

    frases.forEach(frase => expect(pascalCase(frase)).toEqual(expectation));
  });
});
